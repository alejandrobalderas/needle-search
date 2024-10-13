"use client";

import { completeOnboarding } from "@/actions/onboarding";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

const OnboardingFlow = () => {
  const onClick = async () => {
    await completeOnboarding();
    redirect("/dashboard");
  };

  return (
    <div className="flex flex-col gap-y-2">
      <span>Define onboarding flow here</span>
      <Button onClick={() => onClick()} className="">
        Finish Onboarding
      </Button>
    </div>
  );
};

export default OnboardingFlow;
