import { ProductCard } from "@/components/molecules/product-card";
import { TProduct } from "@/types/product";
import React, { useCallback } from "react";

type TProductListProps = {
  products: TProduct[];
};

export const ProductList: React.FC<TProductListProps> = ({ products }) => {
  const renderCard = useCallback(
    (product: TProductListProps["products"][0]) => (
      <li key={product.id} className="w-1/5">
        <ProductCard product={product} />
      </li>
    ),
    []
  );
  return (
    <ul className="flex gap-2 flex-nowrap justify-center">
      {products.map(renderCard)}
    </ul>
  );
};
