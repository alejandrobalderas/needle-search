import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { siteConfig } from "@/lib/config";

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={siteConfig.copyWrite.howItWorks.steps} />
    </Section>
  );
}
