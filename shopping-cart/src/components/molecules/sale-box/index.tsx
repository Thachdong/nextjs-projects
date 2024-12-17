import { Button } from "@/components/atoms/button";
import { TCollection } from "@/types/collection";
import Link from "next/link";
import React from "react";

export const SaleBox: React.FC<TCollection> = ({
  id,
  name,
  description,
}) => {
  return (
    <div className="text-white bg-black flex flex-col gap-4 items-center justify-center h-[425px] w-full">
      <h5 className="text-center uppercase text-2xl">{name}</h5>

      <p className="w-1/2 text-center">{description}</p>

      <Link href={`/collections/${id}`}>
        <Button variant="white">buy now</Button>
      </Link>
    </div>
  );
};
