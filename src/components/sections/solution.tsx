"use client";

import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Accelerate Your Job Search with AI-Powered Matching",
    description:
      "Let our AI instantly connect you with tech roles that match your skills and preferences. Skip the wait and repetitive interviews.",
    className: "hover:bg-primary/10 transition-all duration-500 ease-out",
    content: <></>,
  },
  {
    title: "Personalized Matches That Reflect Your True Aspirations",
    description:
      "Find jobs that truly fit your aspirations, including your desired salary, impact, and values. Get matches that resonate with what you want.",
    className: "hover:bg-primary/10 transition-all duration-500 ease-out",
    content: <></>,
  },
  {
    title: "Full Control Over Your Personal Data",
    description:
      "Your information stays with you. Share it only when you choose, keeping your privacy protected at all times.",
    className: "hover:bg-primary/10 transition-all duration-500 ease-out",
    content: (
      <>
        {/* <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        /> */}
      </>
    ),
  },
];

export default function Component() {
  return (
    <Section
      title="Solution"
      subtitle="Elevate Your Career with AI-Powered Matches"
      description="Generic job platforms won't cut it. Our solution is purpose-built to deliver exceptional AI-driven job matches tailored to your unique skills, experience, and career aspirations."
      className="bg-neutral-100 pb-6 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-800",
              feature.className,
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="mb-2 h-14 font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {/* {feature.content} */}
            {/* <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div> */}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
