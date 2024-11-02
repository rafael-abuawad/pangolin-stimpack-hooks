export const FactoryConfig = {
  address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "__poolManager",
          type: "address",
          internalType: "contract IPoolManager",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createHookExisting",
      inputs: [
        {
          name: "token",
          type: "address",
          internalType: "address",
        },
        {
          name: "tag",
          type: "uint8",
          internalType: "enum Factory.Tag",
        },
      ],
      outputs: [
        {
          name: "hook",
          type: "address",
          internalType: "contract StimpackHook",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createHookNew",
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
        {
          name: "tag",
          type: "uint8",
          internalType: "enum Factory.Tag",
        },
      ],
      outputs: [
        {
          name: "hook",
          type: "address",
          internalType: "contract StimpackHook",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "hooks",
      inputs: [
        {
          name: "creator",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "address[]",
          internalType: "contract StimpackHook[]",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getTag",
      inputs: [
        {
          name: "hook",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "enum Factory.Tag",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "error",
      name: "Factory__InvalidTag",
      inputs: [],
    },
    {
      type: "error",
      name: "Factory__InvalidVariant",
      inputs: [],
    },
  ],
} as const;
