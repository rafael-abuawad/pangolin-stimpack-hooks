export const StimpackHookConfig = {
  address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "_poolManager",
          type: "address",
          internalType: "contract IPoolManager",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "afterAddLiquidity",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "key",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct IPoolManager.ModifyLiquidityParams",
          components: [
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "liquidityDelta",
              type: "int256",
              internalType: "int256",
            },
            {
              name: "salt",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
        {
          name: "delta",
          type: "int256",
          internalType: "BalanceDelta",
        },
        {
          name: "",
          type: "int256",
          internalType: "BalanceDelta",
        },
        {
          name: "hookData",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
        {
          name: "",
          type: "int256",
          internalType: "BalanceDelta",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "afterDonate",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "afterInitialize",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "uint160",
          internalType: "uint160",
        },
        {
          name: "",
          type: "int24",
          internalType: "int24",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "afterRemoveLiquidity",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct IPoolManager.ModifyLiquidityParams",
          components: [
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "liquidityDelta",
              type: "int256",
              internalType: "int256",
            },
            {
              name: "salt",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
        {
          name: "",
          type: "int256",
          internalType: "BalanceDelta",
        },
        {
          name: "",
          type: "int256",
          internalType: "BalanceDelta",
        },
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
        {
          name: "",
          type: "int256",
          internalType: "BalanceDelta",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "afterSwap",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "key",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "swapParams",
          type: "tuple",
          internalType: "struct IPoolManager.SwapParams",
          components: [
            {
              name: "zeroForOne",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "amountSpecified",
              type: "int256",
              internalType: "int256",
            },
            {
              name: "sqrtPriceLimitX96",
              type: "uint160",
              internalType: "uint160",
            },
          ],
        },
        {
          name: "delta",
          type: "int256",
          internalType: "BalanceDelta",
        },
        {
          name: "hookData",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
        {
          name: "",
          type: "int128",
          internalType: "int128",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "beforeAddLiquidity",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct IPoolManager.ModifyLiquidityParams",
          components: [
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "liquidityDelta",
              type: "int256",
              internalType: "int256",
            },
            {
              name: "salt",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "beforeDonate",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "beforeInitialize",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "uint160",
          internalType: "uint160",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "beforeRemoveLiquidity",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct IPoolManager.ModifyLiquidityParams",
          components: [
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "liquidityDelta",
              type: "int256",
              internalType: "int256",
            },
            {
              name: "salt",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "beforeSwap",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct PoolKey",
          components: [
            {
              name: "currency0",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              internalType: "contract IHooks",
            },
          ],
        },
        {
          name: "",
          type: "tuple",
          internalType: "struct IPoolManager.SwapParams",
          components: [
            {
              name: "zeroForOne",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "amountSpecified",
              type: "int256",
              internalType: "int256",
            },
            {
              name: "sqrtPriceLimitX96",
              type: "uint160",
              internalType: "uint160",
            },
          ],
        },
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes4",
          internalType: "bytes4",
        },
        {
          name: "",
          type: "int256",
          internalType: "BeforeSwapDelta",
        },
        {
          name: "",
          type: "uint24",
          internalType: "uint24",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "getHookData",
      inputs: [
        {
          name: "user",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      stateMutability: "pure",
    },
    {
      type: "function",
      name: "getHookPermissions",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple",
          internalType: "struct Hooks.Permissions",
          components: [
            {
              name: "beforeInitialize",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterInitialize",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "beforeAddLiquidity",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterAddLiquidity",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "beforeRemoveLiquidity",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterRemoveLiquidity",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "beforeSwap",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterSwap",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "beforeDonate",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterDonate",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "beforeSwapReturnDelta",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterSwapReturnDelta",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterAddLiquidityReturnDelta",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "afterRemoveLiquidityReturnDelta",
              type: "bool",
              internalType: "bool",
            },
          ],
        },
      ],
      stateMutability: "pure",
    },
    {
      type: "function",
      name: "initialize",
      inputs: [
        {
          name: "name",
          type: "string",
          internalType: "string",
        },
        {
          name: "symbol",
          type: "string",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "initialize",
      inputs: [
        {
          name: "tokenAddress",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "parseHookData",
      inputs: [
        {
          name: "data",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "pure",
    },
    {
      type: "function",
      name: "poolManager",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IPoolManager",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "token",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [
        {
          name: "newOwner",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "unlockCallback",
      inputs: [
        {
          name: "data",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bytes",
          internalType: "bytes",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          name: "user",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "HookNotImplemented",
      inputs: [],
    },
    {
      type: "error",
      name: "InvalidPool",
      inputs: [],
    },
    {
      type: "error",
      name: "LockFailure",
      inputs: [],
    },
    {
      type: "error",
      name: "NotPoolManager",
      inputs: [],
    },
    {
      type: "error",
      name: "NotSelf",
      inputs: [],
    },
    {
      type: "error",
      name: "StimpackHook__AlreadyInitialized",
      inputs: [],
    },
    {
      type: "error",
      name: "StimpackHook__NoBalance",
      inputs: [],
    },
    {
      type: "error",
      name: "StimpackHook__NotInitialized",
      inputs: [],
    },
  ],
};
