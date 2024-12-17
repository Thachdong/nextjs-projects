import { AdminHeader } from "@/components/organasims/admin-layout/admin-header";
import { AdminSidebar } from "@/components/organasims/admin-layout/admin-sidebar";
import { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

export default async function AdminLayout({
  children,
}: Readonly<AdminLayoutProps>) {
  return (
    <main className="flex items-stretch min-h-screen">
      <aside className="border-r border-gray-200 w-[175px] min-w-[175px] max-w-[175px]">
        <AdminSidebar />
      </aside>
      <section className="flex-grow">
        <header>
          <AdminHeader />
        </header>

        <section>{children}</section>
      </section>
    </main>
  );
}
