"use client";

import { Table } from "@/components/atoms/table";
import { AdminPageHeader } from "@/components/molecules/admin-page-header";
import { TCollection } from "@/types/collection";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useMemo } from "react";

type TAdminCollectionPageProps = {
  collections: TCollection[];
};

const columnHelper = createColumnHelper<TCollection>();

export const AdminCollectionPage: React.FC<TAdminCollectionPageProps> = ({
  collections,
}) => {
  const columns: TColumnDef<TCollection>[] = useMemo(
    () => [
      columnHelper.accessor("name", { header: "Collection Name" }),
      columnHelper.accessor("description", { header: "Description" }),
      columnHelper.accessor("createdAt", { header: "Date Created" }),
      columnHelper.accessor("updatedAt", { header: "Date Updated" }),
    ],
    []
  );
  return (
    <section className="flex flex-col gap-4 p-4">
      <AdminPageHeader
        header="Collections"
        linkToCreate="/admin/collections/create"
      />

      <Table data={collections} columns={columns} />
    </section>
  );
};
