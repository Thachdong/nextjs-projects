import { AdminPageHeader } from "@/components/molecules/admin-page-header";
import React from "react";

export const AdminPageSettingsPage: React.FC = () => {
  return (
    <section className="p-2">
      <AdminPageHeader header="Page Settings" linkToCreate="/page-settings/create" />
    </section>
  );
};
