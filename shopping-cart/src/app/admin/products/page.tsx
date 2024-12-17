import { AdminProductsPage } from "@/components/pages/admin/products";
import { getAllProduct } from "@/services/productServices";

export default async function Productss() {
    const products = await getAllProduct({})
    return <AdminProductsPage products={products} />
}