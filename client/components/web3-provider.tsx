"use client";

import { WagmiProvider, createConfig } from "wagmi";
import { avalanche } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import React from "react";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [avalanche],

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Pangolin Stimpack Hooks",

    // Optional App Info
    appDescription:
      "A set of easy-to-use hooks that encourage people to provide liquidity or make swaps, boosting activity 🚀📈. Rewards can be given as tokensor points, and each hook can be launched from a no-code, user-friendly web app",
    appUrl: "https://github.com/rafael-abuawad/pangolin-stimpack-hooks", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
