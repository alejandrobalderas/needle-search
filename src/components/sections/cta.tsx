import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CTAButton from "../cta-button";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Ready to get started?"
      subtitle="Get started now and find the right job for you."
      className="rounded-xl bg-primary/10 py-16"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <CTAButton />
      </div>
    </Section>
  );
}
