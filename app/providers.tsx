"use client";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import wagmi
import { WagmiProvider } from "wagmi";
import { http, createConfig } from 'wagmi'
import { arbitrum, scroll } from 'wagmi/chains'

//analytics
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";


export const config = createConfig({
  chains: [arbitrum, scroll],
  transports: {
    [arbitrum.id]: http(),
    [scroll.id]: http(),
  },
})

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
  });
}

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </PostHogProvider>
  );
}
