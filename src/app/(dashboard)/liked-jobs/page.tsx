import { LikedJobsCard } from "@/components/liked-jobs-card";
import React from "react";

const likedJobsData = [
  {
    role: "Frontend Developer",
    company: "Google",
    description:
      "Join our team to build and maintain user-friendly web applications. You will work closely with designers and backend developers to create seamless user experiences.",
    requirements: [
      "3+ years of experience in frontend development",
      "Proficient in JavaScript, React, and TypeScript",
      "Strong understanding of HTML and CSS",
      "Experience with responsive design",
    ],
    responsibilities: [
      "Develop and maintain web applications using React and TypeScript",
      "Collaborate with UX/UI designers to implement design specifications",
      "Optimize applications for maximum speed and scalability",
      "Ensure the technical feasibility of UI/UX designs",
    ],
  },
  {
    role: "Backend Developer",
    company: "Amazon",
    description:
      "We are looking for a Backend Developer to design and implement scalable backend services. You will work closely with frontend developers and product managers to deliver high-quality software.",
    requirements: [
      "3+ years of experience in backend development",
      "Proficient in Node.js, Express, and MongoDB",
      "Strong understanding of RESTful APIs",
      "Experience with cloud services (AWS, GCP, Azure)",
    ],
    responsibilities: [
      "Design and implement scalable backend services",
      "Collaborate with frontend developers and product managers",
      "Optimize applications for performance and scalability",
      "Ensure the security and integrity of backend services",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Facebook",
    description:
      "Join our team as a Full Stack Developer to build and maintain web applications. You will work on both frontend and backend development to deliver seamless user experiences.",
    requirements: [
      "3+ years of experience in full stack development",
      "Proficient in JavaScript, React, Node.js, and MongoDB",
      "Strong understanding of HTML and CSS",
      "Experience with responsive design and RESTful APIs",
    ],
    responsibilities: [
      "Develop and maintain web applications using React and Node.js",
      "Collaborate with UX/UI designers and backend developers",
      "Optimize applications for maximum speed and scalability",
      "Ensure the technical feasibility of UI/UX designs",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Apple",
    description:
      "We are looking for a Mobile Developer to create and maintain high-quality mobile applications. You will work closely with designers and backend developers to deliver seamless user experiences.",
    requirements: [
      "3+ years of experience in mobile development",
      "Proficient in Swift, Kotlin, and React Native",
      "Strong understanding of mobile UI/UX design principles",
      "Experience with mobile app deployment and distribution",
    ],
    responsibilities: [
      "Develop and maintain mobile applications for iOS and Android",
      "Collaborate with UX/UI designers to implement design specifications",
      "Optimize applications for performance and scalability",
      "Ensure the technical feasibility of UI/UX designs",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Microsoft",
    description:
      "Join our team as a DevOps Engineer to manage and optimize our development and deployment processes. You will work closely with developers and system administrators to ensure smooth operations.",
    requirements: [
      "3+ years of experience in DevOps",
      "Proficient in CI/CD tools (Jenkins, GitLab CI, CircleCI)",
      "Strong understanding of cloud services (AWS, GCP, Azure)",
      "Experience with containerization (Docker, Kubernetes)",
    ],
    responsibilities: [
      "Manage and optimize development and deployment processes",
      "Collaborate with developers and system administrators",
      "Ensure the reliability and scalability of infrastructure",
      "Implement and maintain CI/CD pipelines",
    ],
  },
  {
    role: "Software Engineer in Test",
    company: "Netflix",
    description:
      "We are looking for a Software Engineer in Test to ensure the quality and reliability of our software. You will work closely with developers and product managers to create and execute test plans.",
    requirements: [
      "3+ years of experience in software testing",
      "Proficient in automated testing tools (Selenium, Cypress)",
      "Strong understanding of software development lifecycle",
      "Experience with test-driven development (TDD)",
    ],
    responsibilities: [
      "Create and execute test plans",
      "Collaborate with developers and product managers",
      "Ensure the quality and reliability of software",
      "Implement and maintain automated test suites",
    ],
  },
  {
    role: "Data Engineer",
    company: "Spotify",
    description:
      "Join our team as a Data Engineer to design and implement data pipelines. You will work closely with data scientists and analysts to ensure the availability and integrity of data.",
    requirements: [
      "3+ years of experience in data engineering",
      "Proficient in SQL, Python, and ETL tools",
      "Strong understanding of data warehousing and data modeling",
      "Experience with big data technologies (Hadoop, Spark)",
    ],
    responsibilities: [
      "Design and implement data pipelines",
      "Collaborate with data scientists and analysts",
      "Ensure the availability and integrity of data",
      "Optimize data processing for performance and scalability",
    ],
  },
];

const LikedJobsPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-semibold">Liked Jobs</h1>
      {likedJobsData.map((job, index) => (
        <LikedJobsCard
          key={index}
          role={job.role}
          company={job.company}
          description={job.description}
          requirements={job.requirements}
          responsibilities={job.responsibilities}
        />
      ))}
    </div>
  );
};

export default LikedJobsPage;
