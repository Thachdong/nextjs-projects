import { LinkAsButton } from "@/components/atoms/link-as-button";
import { ProductCard } from "@/components/molecules/product-card";
import { TCollection } from "@/types/collection";
import { TProduct } from "@/types/product";
import React, { useCallback } from "react";

type TCollectionHeaderProps = {
  collection: TCollection;
};

export const CollectionOverview: React.FC<TCollectionHeaderProps> = ({
  collection,
}) => {
  const renderProduct = useCallback(
    (prod: TProduct) => (
      <li key={prod.id} className="w-1/5">
        <ProductCard product={prod} />
      </li>
    ),
    []
  );
  return (
    <div className="content-container flex flex-col gap-4 mb-8">
      <div className="flex justify-between items-center gap-4 border-b border-gray-300 py-2">
        <h6 className="font-bold text-lg">{collection?.name}</h6>

        <LinkAsButton href={`/collections/${collection?.id}`}>
          View All
        </LinkAsButton>
      </div>

      <ul className="flex gap-4 flex-nowrap">
        {collection?.products?.map(renderProduct)}
      </ul>
    </div>
  );
};
