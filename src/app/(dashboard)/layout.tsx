import { AppSidebar } from "@/components/app-sidebar";
import BetaTesterModal from "@/components/beta-testers/beta-tester-modal";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { checkUser } from "@/lib/checkUser";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await checkUser();

  if (!user) {
    redirect("/login");
  }

  if (!user.onBoardingComplete) {
    redirect("/onboarding");
  }

  const { cookies } = await import("next/headers");
  // const isSidebarOpen = cookies().get("sidebar:state")?.value === "true";
  const isSidebarOpen = true;

  return (
    <div className="h-fit">
      <SidebarLayout defaultOpen={isSidebarOpen}>
        <AppSidebar />
        <main className="flex max-h-screen flex-1 flex-col overflow-y-auto bg-neutral-100 p-2 transition-all duration-300 ease-in-out">
          {/* <SidebarTrigger /> */}
          {children}
        </main>
      </SidebarLayout>
      <BetaTesterModal open={!user.isBetaTester} />
    </div>
  );
};

export default DashboardLayout;
