"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//analytics
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

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
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PostHogProvider>
  );
}
