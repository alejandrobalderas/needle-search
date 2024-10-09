import { AppSidebar } from "@/components/app-sidebar";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DevLayout = async ({ children }: { children: React.ReactNode }) => {
  const { cookies } = await import("next/headers");
  const isSidebarOpen = cookies().get("sidebar:state")?.value === "true";
  return (
    <div className="bg-neutral-100">
      <SidebarLayout defaultOpen={isSidebarOpen}>
        <AppSidebar />
        <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarLayout>
    </div>
  );
};

export default DevLayout;
