import { CollectionPage } from "@/components/pages/collections";
import { getCollections } from "@/services/collectionServices";

export default async function Collection() {
  const collections = await getCollections()

  return <CollectionPage collections={collections} topCollection={collections[0]} />;
}
