import { CollectionBanner } from "@/components/molecules/collection-banner";
import { ProductCard } from "@/components/molecules/product-card";
import { TCollection } from "@/types/collection";
import { TProduct } from "@/types/product";
import React, { useCallback } from "react";

type TCollectionDetailProps = {
  collection?: TCollection;
};

export const CollectionDetailPage: React.FC<TCollectionDetailProps> = ({
  collection,
}) => {
  const renderColl = useCallback(
    (prod: TProduct) => (
      <li key={prod.id} className="w-1/5">
        <ProductCard product={prod} />
      </li>
    ),
    []
  );
  return (
    <main>
      <CollectionBanner
        bannerUrl={collection?.bannerUrl || ''}
        collectionDescription={collection?.description || ''}
        collectionName={collection?.name || ''}
      />

      <ul className="content-container flex gap-4 flex-nowrap py-12">
        {collection?.products?.map(renderColl)}
      </ul>
    </main>
  );
};
