"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";
import SiteLogo from "../site-logo";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";

const AISearchModal = ({
  open,
  children,
}: {
  open?: boolean;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[800px] max-w-6xl">
        <div className="flex flex-col items-center p-4">
          <div className="flex flex-col gap-y-4">
            {/* Logo */}
            <SiteLogo />

            {/* Search Input */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-3 transform text-gray-400" />
              <Textarea
                className="h-24 w-full rounded-lg py-3 pl-10 pr-16 text-sm"
                placeholder="Find your dream job in tech with the power of AI. Simply type in what you're looking for, or let us understand your experience to find roles that suit you best. Our goal is to make job searching as seamless and as personalized as possible."
              />
              <Button
                className="absolute bottom-2 right-2 transform"
                size="icon"
                onClick={() => {
                  router.push("/explore-jobs");
                }}
              >
                <SendHorizonal className="h-4 w-4" />
              </Button>
            </div>

            {/* Job Categories */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  title: "Software Engineer in Berlin",
                  description:
                    "3+ years of experience in Python and Django, looking for a company with a strong learning culture and opportunities for career growth.",
                },
                {
                  title: "Product Manager in the Bay Area",
                  description:
                    "Focusing on AI and machine learning products, interested in roles where I can work cross-functionally with engineering and design teams.",
                },
                {
                  title: "UI/UX Designer",
                  description:
                    "Remote work opportunities, 5+ years experience in Figma, seeking a role that values user-centered design and offers creative freedom.",
                },
                {
                  title: "Senior Backend Developer",
                  description:
                    "In a growing startup, working with Node.js and AWS, interested in contributing to scalable systems and having ownership over features.",
                },
              ].map((category, index) => (
                <Card key={index} className="cursor-pointer">
                  <CardContent className="pt-4">
                    <p className="text-lg font-semibold">{category.title}</p>
                    <p className="text-xs">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default AISearchModal;
