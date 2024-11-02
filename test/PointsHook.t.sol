// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {TickMath} from "v4-core/src/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";
import {StimpackHook} from "../src/StimpackHook.sol";
import {Token} from "../src/tokens/Token.sol";
import {StateLibrary} from "v4-core/src/libraries/StateLibrary.sol";

import {LiquidityAmounts} from "v4-core/test/utils/LiquidityAmounts.sol";
import {IPositionManager} from "v4-periphery/src/interfaces/IPositionManager.sol";
import {EasyPosm} from "./utils/EasyPosm.sol";
import {Fixtures} from "./utils/Fixtures.sol";

contract StimpackHookTest is Test, Fixtures {
    using EasyPosm for IPositionManager;
    using StateLibrary for IPoolManager;

    StimpackHook hook;
    Token pointsToken;
    PoolId poolId;

    uint256 tokenId;
    int24 tickLower;
    int24 tickUpper;

    function setUp() public {
        // creates the pool manager, utility routers, and test tokens
        deployFreshManagerAndRouters();
        deployMintAndApprove2Currencies();

        deployAndApprovePosm(manager);

        // Deploy the hook to an address with the correct flags
        address flags = address(
            uint160(Hooks.AFTER_SWAP_FLAG | Hooks.AFTER_ADD_LIQUIDITY_FLAG) ^ (0x4444 << 144) // Namespace the hook to avoid collisions
        );
        bytes memory constructorArgs = abi.encode(manager); //Add all the necessary constructor arguments from the hook
        deployCodeTo("StimpackHook.sol:StimpackHook", constructorArgs, flags);
        hook = StimpackHook(flags);
        pointsToken = Token(hook.token());

        // Create the pool
        key = PoolKey(Currency.wrap(address(0)), currency1, 3000, 60, IHooks(hook));
        poolId = key.toId();
        manager.initialize(key, SQRT_PRICE_1_1);

        // Provide full-range liquidity to the pool
        tickLower = TickMath.minUsableTick(key.tickSpacing);
        tickUpper = TickMath.maxUsableTick(key.tickSpacing);

        deal(address(this), 200 ether);

        (uint256 amount0, uint256 amount1) = LiquidityAmounts.getAmountsForLiquidity(
            SQRT_PRICE_1_1,
            TickMath.getSqrtPriceAtTick(tickLower),
            TickMath.getSqrtPriceAtTick(tickUpper),
            uint128(100e18)
        );

        (tokenId,) = posm.mint(
            key,
            tickLower,
            tickUpper,
            100e18,
            amount0 + 1,
            amount1 + 1,
            address(this),
            block.timestamp,
            hook.getHookData(address(this))
        );
    }

    function test_StimpackHook_Swap() public {
        // We already have some points because we added some liquidity during setup.
        // So, we'll subtract those from the total points to get the points awarded for this swap.
        uint256 startingPoints = pointsToken.balanceOf(address(this));

        // Let's swap some AVAX for the token.
        bool zeroForOne = true;
        int256 amountSpecified = -1e18; // negative number indicates exact input swap!

        BalanceDelta swapDelta = swap(key, zeroForOne, amountSpecified, hook.getHookData(address(this)));

        uint256 endingPoints = pointsToken.balanceOf(address(this));

        // Let's make sure we got the right amount of points!
        assertEq(
            endingPoints - startingPoints, uint256(-amountSpecified), "Points awarded for swap should be 1:1 with AVAX"
        );
    }

    function test_StimpackHook_Liquidity() public {
        // We already have some points because we added some liquidity during setup.
        // So, we'll subtract those from the total points to get the points awarded for this swap.
        uint256 startingPoints = pointsToken.balanceOf(address(this));

        uint128 liqToAdd = 100e18;

        (uint256 amount0, uint256 amount1) = LiquidityAmounts.getAmountsForLiquidity(
            SQRT_PRICE_1_1, TickMath.getSqrtPriceAtTick(tickLower), TickMath.getSqrtPriceAtTick(tickUpper), liqToAdd
        );

        // Let's swap some AVAX for the token.
        posm.mint(
            key,
            tickLower,
            tickUpper,
            liqToAdd,
            amount0 + 1,
            amount1 + 1,
            address(this),
            block.timestamp,
            hook.getHookData(address(this))
        );

        uint256 endingPoints = pointsToken.balanceOf(address(this));

        // Let's make sure we got the right amount of points!
        assertApproxEqAbs(endingPoints - startingPoints, uint256(liqToAdd), 10);
    }
}
