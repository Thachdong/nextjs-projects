import React from "react";

type TCollectionHeaderProps = {
  header: string;
  description?: string;
};

export const CollectionHeader: React.FC<TCollectionHeaderProps> = ({
  header,
  description,
}) => {
  return (
    <div>
      <h2 className="text-center capitailize text-3xl">{header}</h2>
      <p className="text-sm text-[#555] text-center">{description}</p>
    </div>
  );
};
