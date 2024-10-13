import React from "react";
import { Icons } from "./icons";
import { siteConfig } from "@/lib/config";

const SiteLogo = () => {
  return (
    <div className="flex flex-row gap-x-2">
      <Icons.logo className="h-[40px] w-auto" />
      <span className="text-xl font-bold">{siteConfig.name}</span>
    </div>
  );
};

export default SiteLogo;
