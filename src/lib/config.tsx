import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Brain, Shield, Zap, Sparkles, Upload } from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "needle-ai",
  description: "Page Description",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["List of keywords here"],
  links: {
    email: "support@needle-search.ai",
    twitter: "#",
    discord: "#",
    github: "#",
    instagram: "#",
  },
  copyWrite: {
    hero: {
      mainText: "Find Your Perfect Job with AI-Powered Matching",
      subText:
        "Break free from tedious job searches. Let our AI connect you instantly with opportunities that truly fit your skills and ambitions.",
    },
    logos: {
      title: "Join the Future of Hiring with People Working in",
    },
    problems: [
      {
        title: "Lengthy and Inefficient Hiring Processes",
        description:
          "Are you frustrated with lengthy hiring processes that drag on for weeks or even months? Tired of attending multiple rounds of interviews, answering the same questions over and over? Traditional recruitment wastes your valuable time and keeps you from seizing the opportunities you deserve.",
        icon: Brain,
      },
      {
        title: "Impersonal Matches and Poor Fit",
        description:
          "Do you feel like job offers don't truly align with your skills, values, or career aspirations? When recruiters focus only on your resume or LinkedIn profile, they miss what matters most to you—like your salary expectations, desired impact, collaboration style, and personal goals. This leads to mismatched roles that leave you unsatisfied and unfulfilled.",
        icon: Zap,
      },
      {
        title: "Lack of Control Over Your Personal Data",
        description:
          "Worried about who has access to your personal information? In traditional hiring processes, you often have little control over how your data is shared. Your details might be passed around without your consent, raising concerns about privacy and making you hesitant to engage fully in your job search.",
        icon: Shield,
      },
    ],
    solution: {
      title: "Elevate Your Career with AI-Powered Matches",
      description:
        "Generic job platforms won't cut it. Our solution is purpose-built to deliver exceptional AI-driven job matches tailored to your unique skills, experience, and career aspirations.",
      features: [
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
          content: <></>,
        },
      ],
    },
    howItWorks: {
      steps: [
        {
          id: 1,
          title: "1. Sign Up",
          content:
            "Create your account in seconds using your email or LinkedIn.",
          image: "/needle-login.png",
          icon: <Upload className="h-6 w-6 text-primary" />,
        },
        {
          id: 2,
          title: "2. Complete Your Profile",
          content:
            "Tell us about your skills, experience, and career goals. Set your preferences for salary, company culture, and values.",
          image: "/needle-job-search.png",
          icon: <Zap className="h-6 w-6 text-primary" />,
        },
        {
          id: 3,
          title: "3. Get Matched and Connect",
          content:
            "Receive instant AI-powered job matches tailored to you. Connect directly with hiring managers to schedule interviews.",
          image: "/needle-job-search.png",
          icon: <Sparkles className="h-6 w-6 text-primary" />,
        },
      ],
    },
    cta: "Join the Future of Hiring",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "AI-Powered Automation",
          description: "Streamline your workflow with intelligent automation.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Task Automation",
            description: "Automate repetitive tasks and save time.",
          },
          {
            href: "#",
            title: "Workflow Optimization",
            description: "Optimize your processes with AI-driven insights.",
          },
          {
            href: "#",
            title: "Intelligent Scheduling",
            description: "AI-powered scheduling for maximum efficiency.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Small Businesses",
            href: "#",
            description: "Tailored automation solutions for growing companies.",
          },
          {
            title: "Enterprise",
            href: "#",
            description: "Scalable AI automation for large organizations.",
          },
          {
            title: "Developers",
            href: "#",
            description: "API access and integration tools for developers.",
          },
          {
            title: "Healthcare",
            href: "#",
            description: "Specialized automation for healthcare workflows.",
          },
          {
            title: "Finance",
            href: "#",
            description: "AI-driven process automation for financial services.",
          },
          {
            title: "Education",
            href: "#",
            description:
              "Streamline administrative tasks in educational institutions.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$19",
      period: "month",
      yearlyPrice: "$16",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$40",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "AI-Powered Insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "Q: Why are you called needle.",
      answer: (
        <span>
          Finding the right job is like finding a needle in a haystack. We help
          you find that needle.
        </span>
      ),
    },
    {
      question: "Q: How does the AI matching work?",
      answer: (
        <span>
          Our AI algorithms analyze multiple data points from your profile to
          match you with roles that suit your skills and preferences.
        </span>
      ),
    },
    {
      question: "Q: Is my information secure?",
      answer: (
        <span>
          Absolutely. We prioritize your privacy and use advanced security
          protocols to protect your data. You choose with which companies you
          want to share your data
        </span>
      ),
    },
    {
      question: "Q: Can I use the platform while employed?",
      answer: (
        <span>
          Yes, your job search remains confidential. We do not share your
          information without your consent.
        </span>
      ),
    },
    {
      question: "Q: Why is this free? How do you plan to make money?",
      answer: (
        <span>
          Our platform is completely free for candidates because we believe you
          shouldn't have to pay to find your ideal job. We make money by
          charging companies a fee only when they successfully hire a candidate
          through our platform. This success-based model aligns our interests
          with both you and the employers—we're motivated to help you find the
          perfect fit, and companies only pay when they gain valuable talent.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
