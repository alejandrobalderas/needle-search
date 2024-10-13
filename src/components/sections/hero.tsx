"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/config";
import Image from "next/image";
import CTAButton from "../cta-button";
import { BorderBeam } from "../magicui/border-beam";

const ease = [0.16, 1, 0.3, 1];

const { mainText, subText } = siteConfig.copyWrite.hero;

function HeroPill() {
  return (
    <motion.a
      href="/blog/introducing-acme-ai"
      className="flex w-auto items-center space-x-2 whitespace-pre rounded-full bg-secondary/20 px-2 py-1 ring-1 ring-primary"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <p className="text-xs font-medium text-primary sm:text-sm">
        ✨ We are not recruiters, we are techies solving problems with tech
      </p>
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.a>
  );
}

function HeroTitles() {
  const mainTextArray = mainText.split(" ");

  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {mainTextArray.map((text, index) => (
          <motion.span
            key={index}
            className="inline-block text-balance px-1 font-semibold md:px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="max-w-4l mx-auto text-balance text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        {subText}
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <CTAButton showWaitingListModal={true} />
      </motion.div>
      <motion.p
        className="mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Get your free trial today! Just joking it's free forever.
      </motion.p>
    </>
  );
}

// function HeroImage() {
//   // const ref = useRef(null);
//   // const inView = useInView(ref, { once: true, margin: "-100px" });
//   return (
//     <div
//       // ref={ref}
//       className="animate-fade-up relative mt-[8rem] opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
//     >
//       <div
//         className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
//           ""
//           // inView ? "before:animate-image-glow" : ""
//         }`}
//       >
//         <BorderBeam
//           size={200}
//           duration={12}
//           delay={11}
//           colorFrom="var(--color-one)"
//           colorTo="var(--color-two)"
//         />
//         <div className="">Hello</div>
//         <img
//           src="/hero-light.png"
//           alt="Hero Image"
//           className="relative block h-full w-full rounded-[inherit] border object-contain dark:hidden"
//         />
//       </div>
//     </div>
//   );
// }

function HeroImage() {
  return (
    <div className="mt-4 rounded-lg text-black">
      <BorderBeam
        size={200}
        duration={12}
        delay={11}
        colorFrom="var(--color-one)"
        colorTo="var(--color-two)"
      />
      <Image
        className="rounded-lg"
        src={"/needle-job-search.png"}
        alt="Hero Image"
        width={800}
        height={800}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pb-14 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>
  );
}
