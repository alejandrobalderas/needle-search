import JobSwipeCards from "@/components/job-cards/JobSwipeCards";
import React from "react";

const ExploreJobsPage = () => {
  return (
    <main className="flex max-h-screen flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
      <h1 className="mb-12 text-2xl font-bold">Explore Job Opportunities</h1>
      <JobSwipeCards />
    </main>
  );
};

export default ExploreJobsPage;
