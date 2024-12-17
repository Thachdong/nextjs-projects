import { LinkAsButton } from "@/components/atoms/link-as-button";
import React from "react";

type TAdminPageHeaderProps = {
  header: string;
  linkToCreate: string;
};

export const AdminPageHeader: React.FC<TAdminPageHeaderProps> = ({
  header,
  linkToCreate,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-2xl">{header}</h1>
      <LinkAsButton href={linkToCreate}>Create</LinkAsButton>
    </div>
  );
};
