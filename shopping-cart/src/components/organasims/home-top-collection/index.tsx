import { CollectionHeader } from "@/components/atoms/collection-header";
import { getCollectionById } from "@/services/collectionServices";
import { ProductList } from "../product-list";

type THomeTopCollectionProps = {
  collectionId: string;
};
export async function HomeTopCollection({
  collectionId,
}: THomeTopCollectionProps) {
  const collection = await getCollectionById(collectionId);

    if (!collection) return <></>

  return (
    <section className="content-container flex flex-col gap-6 py-12">
      <CollectionHeader
        header={collection.name}
        description={collection.description}
      />

      <ProductList products={collection.products || []} />
    </section>
  );
}
