// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {StimpackHook} from "./StimpackHook.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";

contract Factory {
    error Factory__InvalidVariant();

    IPoolManager _poolManager;
    mapping(address => StimpackHook[]) _hooks;

    constructor(IPoolManager __poolManager) {
        _poolManager = __poolManager;
    }

    function createHook() public returns (StimpackHook hook) {
        hook = new StimpackHook(_poolManager);
        _hooks[msg.sender].push(hook);
        return hook;
    }

    function hooks(address creator) public view returns (StimpackHook[] memory) {
        return _hooks[creator];
    }
}
