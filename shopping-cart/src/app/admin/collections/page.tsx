import { AdminCollectionPage } from "@/components/pages/admin/collections";
import { getCollections } from "@/services/collectionServices";

export default async function Collections() {
    const collections = await getCollections()

    return <AdminCollectionPage collections={collections} />
}