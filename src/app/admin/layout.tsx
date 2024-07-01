"use client";

import AdminHeader from "@/components/admin/AdminHeader";
import Sidebar from "@/components/admin/Sidebar";
import { SidebarProvider } from "@/lib/context/SidebarContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col gap-y-10 w-full px-6 py-5">
        <AdminHeader />
        <div className="flex w-full gap-x-20">
          <Sidebar />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
