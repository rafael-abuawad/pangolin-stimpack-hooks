// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {StimpackHook} from "./StimpackHook.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";

contract Factory {
    error Factory__InvalidVariant();
    error Factory__InvalidTag();

    enum Tag {
       Token,
       Points,
       ExistingToken,
       ExistingPoints
    }

    IPoolManager _poolManager;
    mapping(address => StimpackHook[]) _hooks;
    mapping(StimpackHook => Tag) _hookTags;

    constructor(IPoolManager __poolManager) {
        _poolManager = __poolManager;
    }

    function createHookNew(string memory name, string memory symbol, Tag tag) public returns (StimpackHook hook) {
        if (tag != Tag.Token || tag != Tag.Points) {
            revert Factory__InvalidTag();
        }
        
        hook = new StimpackHook(_poolManager);
        hook.initialize(name, symbol);
        _hooks[msg.sender].push(hook);
        _hookTags[hook] = tag;
        return hook;
    }

    function createHookExisting(address token, Tag tag) public returns (StimpackHook hook) {
        if (tag != Tag.ExistingToken || tag != Tag.ExistingPoints) {
            revert Factory__InvalidTag();
        }

        hook = new StimpackHook(_poolManager);
        hook.initialize(token);
        _hooks[msg.sender].push(hook);
        _hookTags[hook] = tag;
        return hook;
    }

    function hooks(address creator) public view returns (StimpackHook[] memory) {
        return _hooks[creator];
    }

    function tag(address hook) public view returns (Tag) {
        return _hookTags[StimpackHook(hook)];
    }
}
