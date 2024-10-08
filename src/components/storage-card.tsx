import { FileUser } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function StorageCard() {
  const maxApplicationsPerDay = 3;
  const jobsAppliedToday = 2;
  return (
    <Card className="rounded-md text-xs shadow-sm">
      <CardContent className="flex items-start gap-2.5 p-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
          <FileUser className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="grid flex-1 gap-1">
          <p className="font-medium">Direct Applications Today</p>
          <p className="text-muted-foreground">
            {jobsAppliedToday} / {maxApplicationsPerDay} Applications
          </p>
          <Progress
            value={(jobsAppliedToday / maxApplicationsPerDay) * 100}
            className="mt-1"
            aria-label="applications used"
          />
        </div>
      </CardContent>
    </Card>
  );
}
