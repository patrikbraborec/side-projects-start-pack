"use client";

import posthog from "posthog-js";
import { PostHogProvider as ReactPostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!!, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    person_profiles: "always",
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactPostHogProvider client={posthog}>{children}</ReactPostHogProvider>
  );
}
