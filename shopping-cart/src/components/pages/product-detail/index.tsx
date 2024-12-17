 import { Button } from "@/components/atoms/button";
import { Tab } from "@/components/molecules/tab";
import { getS3Url } from "@/libs/utils/s3-utils";
import { TProduct } from "@/types/product";
import Image from "next/image";
import React from "react";

type TProductDetailProps = {
  product?: TProduct;
};

export const ProductDetailPage: React.FC<Readonly<TProductDetailProps>> = ({
  product,
}) => {
  if (!product) {
    return <p>Opppps! product does not exist or already remove!</p>
  }

  return (
    <section className="content-container py-4">
      {/* #region -- product info */}
      <section className="flex gap-4 flex-nowrap items-stretch mb-16">
        <div className="w-[40%]">
          <Image
            src={getS3Url(product.imgUrl)}
            alt={product.name}
            width={550}
            height={685}
          />
        </div>

        <div className="w-[60%] flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{product.name}</h1>

          <div className="flex gap-4">
            <span
              className={`text-xl line-through text-gray-400 ${
                product.price ? "inline-block" : "hidden"
              }`}
            >
              ${product.price?.toFixed(2)}
            </span>

            <span className="text-xl text-primary">
              ${product.price?.toFixed(2)}
            </span>
          </div>

          <p className="w-3/4">{product.description}</p>

          <Button variant="primary" className="w-48">
            add to cart
          </Button>
        </div>
      </section>
      {/* #endregion */}

      {/* #region -- blog post and reviews */}
      <section className="mb-12">
        <Tab
          tabItems={[
            { id: "1", label: "Description" },
            { id: "2", label: "Reviews" },
          ]}
          tabContents={[
            { id: "1", content: "product.blogPost" },
            {
              id: "2",
              content: (
                <div>
                  review content!
                </div>
              ),
            },
          ]}
          initTabId="1"
        />
      </section>
      {/* #endregion */}
    </section>
  );
};
