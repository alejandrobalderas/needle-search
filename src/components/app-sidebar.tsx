"use client";

import {
  BarChart,
  Bell,
  Briefcase,
  FileText,
  Frame,
  HelpCircle,
  Map,
  MessageSquare,
  PieChart,
  Settings,
  SquareTerminal,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { StorageCard } from "@/components/storage-card";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { Icons } from "./icons";
const data = {
  user: {
    name: "Alejandro Balderas",
    email: "alejandro@example.com",
    avatar: "https://api.dicebear.com/9.x/lorelei/svg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      disabled: false,
      items: [],
    },
    {
      title: "Job Opportunities",
      url: "#",
      icon: Briefcase,
      isActive: true,
      disabled: false,
      items: [
        {
          title: "Explore Jobs",
          url: "#",
          isActive: false,
        },
        {
          title: "Liked Jobs",
          url: "/liked-jobs",
          isActive: false,
        },
      ],
    },
    {
      title: "My Profile",
      url: "#",
      icon: User,
      isActive: true,
      disabled: false,
      items: [
        {
          title: "Preferences",
          url: "#",
          isActive: false,
        },
        {
          title: "Profile Info",
          url: "#",
          isActive: false,
        },
      ],
    },
    {
      title: "Applications & Interviews",
      url: "#",
      icon: FileText,
      isActive: false,
      disabled: true,
      items: [
        {
          title: "Applications",
          url: "#",
          isActive: false,
        },
        {
          title: "Calendar",
          url: "#",
          isActive: false,
        },
      ],
    },
    {
      title: "Insights",
      url: "#",
      icon: BarChart,
      isActive: false,
      disabled: true,
      items: [],
    },
  ],
  navSecondary: [
    {
      title: "Notifications",
      url: "#",
      icon: Bell, // Updated icon
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings, // Updated icon
    },
    {
      title: "Support",
      url: "#",
      icon: HelpCircle, // Updated icon
    },
    {
      title: "Feedback",
      url: "#",
      icon: MessageSquare, // Updated icon
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  searchResults: [
    {
      title: "Routing Fundamentals",
      teaser:
        "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.",
      url: "#",
    },
    {
      title: "Layouts and Templates",
      teaser:
        "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.",
      url: "#",
    },
    {
      title: "Data Fetching, Caching, and Revalidating",
      teaser:
        "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.",
      url: "#",
    },
    {
      title: "Server and Client Composition Patterns",
      teaser:
        "When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ",
      url: "#",
    },
    {
      title: "Server Actions and Mutations",
      teaser:
        "Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.",
      url: "#",
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}

        <Icons.siteIcon />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} searchResults={data.searchResults} />
        </SidebarItem>
        {/* <SidebarItem>
          <SidebarLabel>Projects</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem> */}
        <SidebarItem className="mt-auto">
          <SidebarLabel></SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
        <SidebarItem>
          <StorageCard />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
