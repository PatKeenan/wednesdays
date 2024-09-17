"use client";

import { LandingPage } from "@/components/landing-page";
import { LandingPage2 } from "@/components/landing-page-2";

import { useFeatureFlagVariantKey } from "posthog-js/react";

// Used for A/B testing
const experimentName = "landing-page-experiment";
const experimentVariants = {
  Control: "control",
  Version2: "version-2",
} as const;

export default function Page() {
  const variant = useFeatureFlagVariantKey(experimentName);

  if (variant == experimentVariants.Control) {
    return <LandingPage />;
  }

  if (variant == experimentVariants.Version2) {
    return <LandingPage2 />;
  }

  return <LandingPage />;
}
