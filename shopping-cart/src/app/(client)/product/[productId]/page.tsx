import { ProductDetailPage } from "@/components/pages/product-detail";
import { getProductById } from "@/services/productServices";

type TProductDetailProps = {
  params: {
    productId: string;
  };
};

export default async function ProductDetail({
  params: { productId },
}: Readonly<TProductDetailProps>) {
  const productDetail = await getProductById(productId);

  return <ProductDetailPage product={productDetail} />;
}