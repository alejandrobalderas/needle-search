import React from "react";
import { Textarea } from "../ui/textarea";
import { ConfettiButton } from "../ui/confetti";
import { Button } from "../ui/button";

const BetaTesterForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const handleSubmit = () => {
    onSubmit();
  };
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        Tell us what you're looking forward to in our platform, and we'll
        prioritize your access!
      </div>
      <Textarea className="focus-visible:ring-0" />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default BetaTesterForm;
