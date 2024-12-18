import { AdminPageHeader } from "@/components/molecules/admin-page-header";
import { CollectionForm } from "@/components/templates/collection-form";
import React from "react";

export const CreateCollectionPage: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 p-4">
      <AdminPageHeader
        header="Create Collection"
      />
      
      <CollectionForm />
    </section>
  );
};
