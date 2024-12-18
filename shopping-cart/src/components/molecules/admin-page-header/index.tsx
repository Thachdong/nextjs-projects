import { Button } from "@/components/atoms/button";
import Link from "next/link";
import React from "react";

type TAdminPageHeaderProps = {
  header: string;
  linkToCreate?: string;
};

export const AdminPageHeader: React.FC<TAdminPageHeaderProps> = ({
  header,
  linkToCreate,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-2xl">{header}</h1>

      {linkToCreate && (
        <Link href={linkToCreate}>
          <Button variant="outline-primary">Create</Button>
        </Link>
      )}
    </div>
  );
};
