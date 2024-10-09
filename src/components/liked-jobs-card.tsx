import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function LikedJobsCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row gap-2 p-4">
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold">Software Engineer</div>
          <div className="text-sm font-semibold text-muted-foreground">
            Acme Inc
          </div>
        </div>
        <Button variant="default" size="sm" className="ml-auto">
          Auto Apply
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription>
          Join our growing engineering team and help build the next generation
          of our platform.
        </CardDescription>
        <Accordion type="single" collapsible>
          <AccordionItem key={"id"} value={"idx"} className="border-none">
            <AccordionTrigger>Show more</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-lg font-semibold">Requirements:</h3>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>3+ years of experience in software engineering</li>
                <li>Proficient in JavaScript, React, and Node.js</li>
                <li>Strong problem-solving and analytical skills</li>
              </ul>
              <h3 className="mt-4 text-lg font-semibold">Responsibilities:</h3>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Develop and maintain complex web applications</li>
                <li>
                  Collaborate with cross-functional teams to deliver
                  high-quality software
                </li>
                <li>
                  Participate in code reviews and provide feedback to improve
                  codebase
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
