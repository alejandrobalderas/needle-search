"use client";

import Section from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SolutionSection() {
  return (
    <Section
      title="Solution"
      subtitle={siteConfig.copyWrite.solution.title}
      description={siteConfig.copyWrite.solution.description}
      className="bg-neutral-100 pb-6 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {siteConfig.copyWrite.solution.features.map((feature, index) => (
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
