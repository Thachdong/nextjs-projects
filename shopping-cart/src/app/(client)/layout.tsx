import type { Metadata } from "next";

import { UserHeader } from "@/components/organasims/user-header";
import { UserFooter } from "@/components/organasims/user-footer";

export const metadata: Metadata = {
  title: "Moni.Fashion",
  description: "famous fashion brand",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen max-w-[1366px] mx-auto bg-white">
      <UserHeader />

      <section className="flex-grow">{children}</section>

      <UserFooter />
    </main>
  );
}
