import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardHeader, CardContent, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

interface LikedJobsCardProps {
  role: string;
  company: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export function LikedJobsCard({
  role,
  company,
  description,
  requirements,
  responsibilities,
}: LikedJobsCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row gap-2 p-4">
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold">{role}</div>
          <div className="text-sm font-semibold text-muted-foreground">
            {company}
          </div>
        </div>
        <Button variant="default" size="sm" className="ml-auto">
          Auto Apply
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription>{description}</CardDescription>
        <Accordion type="single" collapsible>
          <AccordionItem key={"id"} value={"idx"} className="border-none">
            <AccordionTrigger>Show more</AccordionTrigger>
            <AccordionContent>
              <h3 className="text-lg font-semibold">Requirements:</h3>
              <ul className="list-disc pl-6 text-muted-foreground">
                {requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              <h3 className="mt-4 text-lg font-semibold">Responsibilities:</h3>
              <ul className="list-disc pl-6 text-muted-foreground">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
