"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function OnboardingPersonalInformationForm() {
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date-of-birth">Date of Birth</Label>
        <Input id="date-of-birth" type="date" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn</Label>
        <Input id="linkedin" placeholder="Enter your LinkedIn profile URL" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cv">CV</Label>
        <Input id="cv" type="file" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="current-role">Current Role</Label>
        <Input id="current-role" placeholder="e.g. Software Engineer" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="years-experience">Years of Experience</Label>
        <Input
          id="years-experience"
          type="number"
          min="0"
          placeholder="e.g. 5"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="career-goals">Career Goals</Label>
        <Textarea
          id="career-goals"
          placeholder="e.g. Become a tech lead, start my own company"
          className="min-h-[100px]"
        />
      </div>
    </div>

    // <Dialog defaultOpen>
    //   <DialogTrigger asChild>
    //     <Button variant="outline">Get Started</Button>
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[600px]">
    //     <DialogHeader>
    //       <DialogTitle>Tell us about yourself</DialogTitle>
    //       <DialogDescription>
    //         We'd like to learn more about your current career and future
    //         aspirations to better understand how we can help.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <DialogFooter>
    //       <Button variant="outline" onClick={() => {}}>
    //         Cancel
    //       </Button>
    //       <Button type="submit">Submit</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
  );
}
