import { CollectionBanner } from "@/components/molecules/collection-banner";
import { CollectionOverview } from "@/components/organasims/collection-overview/inex";
import { TCollection } from "@/types/collection";
import React, { useCallback } from "react";

type TCollectionProps = {
  topCollection: TCollection;
  collections: TCollection[];
};

export const CollectionPage: React.FC<TCollectionProps> = ({
  topCollection,
  collections,
}) => {
  const renderCollection = useCallback(
    (coll: TCollection) => (
      <CollectionOverview key={coll.id} collection={coll} />
    ),
    []
  );
  return (
    <section>
      <CollectionBanner
        bannerUrl={topCollection.bannerUrl}
        collectionDescription={topCollection.description}
        collectionName={topCollection.name}
      />

      {collections.map(renderCollection)}
    </section>
  );
};
