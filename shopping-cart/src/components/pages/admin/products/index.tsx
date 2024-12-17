'use client'
import { Table } from "@/components/atoms/table";
import { AdminPageHeader } from "@/components/molecules/admin-page-header";
import { TProduct } from "@/types/product";
import { createColumnHelper } from "@tanstack/react-table";
import React, { useMemo } from "react";

const columnHelper = createColumnHelper<TProduct>();

type TAdminProductPageProps = {
  products: TProduct[];
};

export const AdminProductsPage: React.FC<TAdminProductPageProps> = ({
  products,
}) => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", { header: "Name" }),
      columnHelper.accessor("description", { header: "Description" }),
      columnHelper.accessor("price", { header: "Price", cell: price => `$${price.renderValue()?.toFixed(2)}` }),
      columnHelper.accessor("stock", { header: "Stock" }),
      columnHelper.accessor("collectionId", { header: "Collection Id" }),
    ],
    []
  );
  return (
    <section className="flex flex-col gap-4 p-4">
      <AdminPageHeader header="Products" linkToCreate="/products/create" />

      <Table data={products} columns={columns} />
    </section>
  );
};
