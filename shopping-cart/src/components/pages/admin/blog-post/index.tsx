import { AdminPageHeader } from "@/components/molecules/admin-page-header";
import React from "react";

export const AdminBlogpostPage: React.FC = () => {
  return (
    <section className="p-2">
      <AdminPageHeader header="Blog Posts" linkToCreate="/blog-posts/create" />

    </section>
  );
};
