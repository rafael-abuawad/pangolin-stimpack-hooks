// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseHook} from "v4-periphery/src/base/hooks/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {BeforeSwapDelta, BeforeSwapDeltaLibrary} from "v4-core/src/types/BeforeSwapDelta.sol";
import {Owned} from "solmate/src/auth/Owned.sol";
import {PointsToken} from "./tokens/PointsToken.sol";

contract PointsHook is BaseHook, Owned {
    using PoolIdLibrary for PoolKey;

    error PointsHook__AlreadyInitialized();
    error PointsHook__NotInitialized();

    PointsToken public pointsToken;
    bool _initialized;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) Owned(msg.sender) {}

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: false,
            afterAddLiquidity: true,
            beforeRemoveLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: false,
            afterSwap: true,
            beforeDonate: false,
            afterDonate: false,
            beforeSwapReturnDelta: false,
            afterSwapReturnDelta: false,
            afterAddLiquidityReturnDelta: false,
            afterRemoveLiquidityReturnDelta: false
        });
    }

    function getHookData(address user) public pure returns (bytes memory) {
        return abi.encode(user);
    }

    function parseHookData(bytes calldata data) public pure returns (address) {
        return abi.decode(data, (address));
    }

    function initialize(string memory name, string memory symbol) external onlyOwner {
        if (_initialized) {
            revert PointsHook__AlreadyInitialized();
        }
        pointsToken = new PointsToken(name, symbol);
        _initialized = true;
    }

    function afterSwap(
        address,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata swapParams,
        BalanceDelta delta,
        bytes calldata hookData
    ) external override returns (bytes4, int128) {
        if (!_initialized) {
            revert PointsHook__NotInitialized();
        }

        // We only award points in the AVAX/<TOKEN> pools.
        if (!key.currency0.isAddressZero()) {
            return (BaseHook.afterSwap.selector, 0);
        }

        // We only award points if the user is buying <TOKEN>.
        if (!swapParams.zeroForOne) {
            return (BaseHook.afterSwap.selector, 0);
        }

        // Get the user
        address user = parseHookData(hookData);

        // How much AVAX are they spending?
        uint256 ethSpendAmount =
            swapParams.amountSpecified < 0 ? uint256(-swapParams.amountSpecified) : uint256(int256(-delta.amount0()));

        // And award the points
        _awardPoints(user, ethSpendAmount);
        return (BaseHook.afterSwap.selector, 0);
    }

    function afterAddLiquidity(
        address,
        PoolKey calldata key,
        IPoolManager.ModifyLiquidityParams calldata,
        BalanceDelta delta,
        BalanceDelta,
        bytes calldata hookData
    ) external override returns (bytes4, BalanceDelta) {
        if (!_initialized) {
            revert PointsHook__NotInitialized();
        }

        // We only award points in the AVAX/<TOKEN> pools.
        if (!key.currency0.isAddressZero()) {
            return (BaseHook.afterAddLiquidity.selector, delta);
        }

        // Get the user
        address user = parseHookData(hookData);

        // How much AVAX are they spending?
        uint256 avaxSpendAmount = uint256(int256(-delta.amount0()));

        // And award the points
        _awardPoints(user, avaxSpendAmount);
        return (BaseHook.afterAddLiquidity.selector, delta);
    }

    function _getPointsForAmount(uint256 amount) internal pure returns (uint256) {
        return amount; // 1:1 with AVAX
    }

    function _awardPoints(address to, uint256 amount) internal {
        pointsToken.mint(to, _getPointsForAmount(amount));
    }
}
