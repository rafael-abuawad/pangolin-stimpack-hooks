// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "solmate/src/tokens/ERC20.sol";
import {Owned} from "solmate/src/auth/Owned.sol";

contract Token is ERC20, Owned {
    constructor(string memory name, string memory symbol) ERC20(name, symbol, 18) Owned(msg.sender) {}

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
