"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  salaryRange: number[];
  description: string;
  tasks: string[];
  style?: React.CSSProperties;
  cardIds?: string[];
}

export default function JobCard({
  id,
  title,
  company,
  salaryRange,
  description,
  tasks,
  style,
  cardIds,
}: JobCardProps) {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-250, 0, 250], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = cardIds ? id === cardIds[cardIds.length - 1] : true;

  const rotate = useTransform(() => {
    const index = cardIds ? cardIds.indexOf(id) : -1;
    const offset = isFront ? 0 : index % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      // TODO: Implement swipe logic
    }
  };

  const formattedSalaryRange = `$${salaryRange[0]}k - $${salaryRange[1]}k`;
  return (
    <motion.div
      className={cn(
        "origin-bottom hover:cursor-grab active:cursor-grabbing",
        isFront && "shadow-lg",
      )}
      style={{
        ...style,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <Card className="relative flex h-[600px] max-w-[400px] overflow-scroll">
        <CardContent className="flex flex-col space-y-4 p-6 pb-32">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            <div className="rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
              {formattedSalaryRange}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Description</h4>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Tasks</h4>
            <ul className="space-y-2 text-muted-foreground">
              {tasks.map((task, index) => (
                <li key={index}>
                  <Icons.checkIcon className="mr-2 inline h-4 w-4" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icons.mapPinIcon className="mr-2 h-4 w-4" />
            <span className="font-semibold">San Francisco, CA</span>
          </div>
        </CardContent>
        <div className="absolute bottom-2 left-1/2 flex w-full -translate-x-1/2 transform items-center justify-center gap-4 bg-white/70">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full border border-gray-300 shadow-md hover:bg-white hover:shadow-lg"
          >
            <Icons.xIcon className="h-6 w-6 text-red-500" />
            <span className="sr-only">Dislike</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full border border-gray-300 shadow-md hover:bg-white hover:shadow-lg"
          >
            <Icons.heartIcon className="h-6 w-6 text-green-500" />
            <span className="sr-only">Like</span>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
