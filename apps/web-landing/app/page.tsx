import { LandingPage } from "@/components/landing-page";
import { LandingPage2 } from "@/components/landing-page-2";

import { PostHogFeature } from "posthog-js/react";

// Used for A/B testing
const experimentName = "landing-page-experiment";
const experimentVariants = {
  Control: "control",
  Version2: "version-2",
} as const;

export default function Page() {
  return (
    <>
      <PostHogFeature
        flag={experimentName}
        match={experimentVariants.Control}
        fallback={<LandingPage />}
      >
        <LandingPage />
      </PostHogFeature>
      <PostHogFeature
        flag={experimentName}
        match={experimentVariants.Version2}
        fallback={<LandingPage />}
      >
        <LandingPage2 />
      </PostHogFeature>
    </>
  );
}
