import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Current Tech Recruiting is 💩"
      description="And we all know it"
    >
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {siteConfig.copyWrite.problems.map((problem, index) => (
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
