"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { siteConfig } from "@/lib/config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const content = {
  title: "Get Early Access to AI-Powered Job Matching",
  description:
    "We're currently in Beta and accepting a limited number of users. Join our waiting list to secure your spot!",
  cta: "Join the Waiting List",
};

const CTAButton = ({
  showWaitingListModal = false,
}: {
  showWaitingListModal?: boolean;
}) => {
  return showWaitingListModal ? <CTAModal /> : <CTAButtonLink />;
};

const CTAModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="flex w-full gap-2 text-background sm:w-auto"
        >
          <Icons.logo className="h-6 w-6" />
          {siteConfig.copywrite.cta}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-2">
          <Input
            type="email"
            placeholder="Your email"
            className="w-full"
            required
          />
        </div>

        <DialogFooter>
          <Button type="submit">{content.cta}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CTAButtonLink = () => {
  return (
    <div>
      <Link
        href="/signup"
        className={cn(
          buttonVariants({ variant: "default" }),
          "flex w-full gap-2 text-background sm:w-auto",
        )}
      >
        <Icons.logo className="h-6 w-6" />
        {siteConfig.copywrite.cta}
      </Link>
    </div>
  );
};

export default CTAButton;
