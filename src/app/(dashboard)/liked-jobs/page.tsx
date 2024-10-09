import { LikedJobsCard } from "@/components/liked-jobs-card";
import React from "react";

const LikedJobsPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <LikedJobsCard />
      <LikedJobsCard />
      <LikedJobsCard />
      <LikedJobsCard />
      <LikedJobsCard />
      <LikedJobsCard />
      <LikedJobsCard />
    </div>
  );
};

export default LikedJobsPage;
