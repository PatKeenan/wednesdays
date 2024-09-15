// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (
    !posthogKey ||
    typeof posthogKey !== "string" ||
    !posthogHost ||
    typeof posthogHost !== "string"
  ) {
    throw new Error(
      "NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST must be set"
    );
  } else {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well,
      capture_heatmaps: true,
      capture_pageleave: true,
      custom_campaign_params: ["v-1"],
    });
  }
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
