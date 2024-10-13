import OnboardingPersonalInformationForm from "@/components/beta-testers/onboarding/onboarding-personal-information-form";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const OnboardingPage = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    redirect("/login");
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: clerkUser.id,
    },
  });
  if (!user) {
    redirect("/login");
  }

  if (user.onBoardingComplete) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Welcome to the onboarding {user?.firstName}
      <OnboardingPersonalInformationForm />
    </div>
  );
};

export default OnboardingPage;
