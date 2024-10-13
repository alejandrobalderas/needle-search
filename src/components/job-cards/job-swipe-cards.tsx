import JobCard from "@/components/job-cards/job-card";
import React from "react";

const jobCardData = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Google",
    salaryRange: [90, 150],
    description:
      "Join our team to build and maintain user-friendly web applications. You will work closely with designers and backend developers to create seamless user experiences.",
    tasks: [
      "Develop and maintain web applications using React and TypeScript",
      "Collaborate with UX/UI designers to implement design specifications",
      "Ensure the technical feasibility of UI/UX designs",
    ],
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "Amazon",
    salaryRange: [100, 160],
    description:
      "We are looking for a skilled backend engineer to develop and maintain our core services. You will be responsible for designing and implementing robust APIs and ensuring system reliability.",
    tasks: [
      "Design and implement RESTful APIs using Node.js and Express",
      "Collaborate with frontend developers to integrate user-facing elements",
      "Optimize server performance and scalability",
      "Ensure data security and compliance with industry standards",
    ],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "Facebook",
    salaryRange: [110, 170],
    description:
      "As a Full Stack Developer, you will work on both frontend and backend components of our web applications. You will be involved in all stages of development, from concept to deployment.",
    tasks: [
      "Develop and maintain web applications using React and Node.js",
      "Collaborate with cross-functional teams to define and implement new features",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and provide constructive feedback",
    ],
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "Netflix",
    salaryRange: [120, 180],
    description:
      "We are seeking a DevOps Engineer to manage our infrastructure and ensure smooth deployment processes. You will work closely with development teams to automate and streamline operations.",
    tasks: [
      "Manage and monitor cloud infrastructure on AWS",
      "Automate deployment processes using CI/CD tools",
      "Ensure system reliability and scalability",
      "Collaborate with development teams to optimize performance",
    ],
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "Microsoft",
    salaryRange: [130, 190],
    description:
      "Join our data science team to analyze and interpret complex data sets. You will work on developing predictive models and providing insights to drive business decisions.",
    tasks: [
      "Analyze large data sets to identify trends and patterns",
      "Develop predictive models using machine learning algorithms",
      "Collaborate with cross-functional teams to provide data-driven insights",
      "Communicate findings to stakeholders through reports and presentations",
    ],
  },
  {
    id: "6",
    title: "Mobile Developer",
    company: "Apple",
    salaryRange: [140, 200],
    description:
      "We are looking for a Mobile Developer to create and maintain high-quality mobile applications. You will work closely with designers and backend developers to deliver seamless user experiences.",
    tasks: [
      "Develop and maintain mobile applications for iOS and Android",
      "Collaborate with UX/UI designers to implement design specifications",
      "Optimize applications for performance and scalability",
      "Ensure the technical feasibility of UI/UX designs",
    ],
  },
];

const JobSwipeCards = () => {
  const data = [...jobCardData].reverse();
  return (
    <div className="grid place-items-center">
      {data.map((job, index) => (
        <JobCard
          id={job.id}
          title={job.title}
          company={job.company}
          salaryRange={job.salaryRange}
          description={job.description}
          tasks={job.tasks}
          style={{
            gridRow: 1,
            gridColumn: 1,
          }}
          cardIds={data.map((job) => job.id)}
        />
      ))}
    </div>
  );
};

export default JobSwipeCards;
