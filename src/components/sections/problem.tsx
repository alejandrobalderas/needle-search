import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
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
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Current Tech Recruiting is 💩"
      description="And we all know it"
    >
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="border-none bg-background shadow-none">
              <CardContent className="space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="h-14 text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
