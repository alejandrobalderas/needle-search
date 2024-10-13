"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import BetaTesterForm from "./beta-tester-form";
import Confetti from "../ui/confetti";
import confetti from "canvas-confetti";

const BetaTesterModal = ({ open }: { open: boolean }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    setFormSubmitted(true);
    frame();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[525px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        hideCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle>Thank You for Signing Up!</DialogTitle>
          <DialogDescription>
            We're thrilled to have you join our community of tech professionals.
            Our platform is currently in a closed Beta phase available to a
            select group of users. We're working diligently to perfect the
            experience, and we'll be extending access to new users soon.
          </DialogDescription>
        </DialogHeader>

        <p>
          We'll reach out to you shortly with an invitation to explore our
          AI-powered job matching platform.
        </p>
        <p className="font-semibold">
          Stay tuned—exciting opportunities are coming your way!
        </p>
        <DialogFooter className="w-full">
          {formSubmitted ? (
            <div className="flex w-full items-center justify-center pt-4 font-semibold">
              Thanks for your feedback! We truly appreciate it 🎉
            </div>
          ) : (
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col items-start justify-between"
            >
              <AccordionItem
                key={"tell-us-more"}
                value="Tell us more"
                className="w-full overflow-hidden border-none"
              >
                <AccordionTrigger className="">
                  Want to Move Up the Waiting List?
                </AccordionTrigger>
                <AccordionContent className="">
                  <BetaTesterForm onSubmit={handleSubmit} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BetaTesterModal;
