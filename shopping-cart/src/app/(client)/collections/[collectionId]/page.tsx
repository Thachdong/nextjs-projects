import { CollectionDetailPage } from "@/components/pages/collection-detail";
import { getCollectionById } from "@/services/collectionServices";

type TCollectionDetailParams = {
  params: {
    collectionId: string;
  };
};

export default async function CollectionDetail({
  params: { collectionId },
}: TCollectionDetailParams) {
  const collection = await getCollectionById(collectionId)

  return <CollectionDetailPage collection={collection} />;
}
