"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const completeOnboarding = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    throw new Error("Unauthenticated");
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: clerkUser.id,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      onBoardingComplete: true,
    },
  });
};
