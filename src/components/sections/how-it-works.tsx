import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Sign Up",
    content: "Create your account in seconds using your email or LinkedIn.",
    // image: "/dashboard.png",
    icon: <Upload className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Complete Your Profile",
    content:
      "Tell us about your skills, experience, and career goals. Set your preferences for salary, company culture, and values.",
    // image: "/dashboard.png",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Get Matched and Connect",
    content:
      "Receive instant AI-powered job matches tailored to you. Connect directly with hiring managers to schedule interviews.",
    // image: "/dashboard.png",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
