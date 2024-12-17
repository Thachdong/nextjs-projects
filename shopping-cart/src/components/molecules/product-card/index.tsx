import { TProduct } from "@/types/product";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getS3Url } from "@/libs/utils/s3-utils";

type TProductCardProps = {
  product: TProduct;
};

export const ProductCard: React.FC<TProductCardProps> = ({
  product: { id, imgUrl, name, price },
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col gap-2 h-full">
        <img src={getS3Url(imgUrl)} alt={name} className="w-full" />

        <div className="truncate-into-two-line flex-grow">
          <p className="text-center text-sm">{name}</p>
        </div>

        <p className="text-center text-primary">${price.toString()}</p>
      </div>
    </Link>
  );
};
