"use client";

import { SaleBox } from "@/components/molecules/sale-box";
import { TCollection } from "@/types/collection";
import React from "react";

type TSaleCollectionProps = {
  collections: TCollection[];
};

export const SaleCollection: React.FC<TSaleCollectionProps> = ({
  collections,
}) => {
  return (
    <ul className="flex flex-wrap justify-center">
      <li className="w-3/5 pr-4">
        <SaleBox {...collections[0]} />
      </li>

      <li className="w-2/5">
        <SaleBox {...collections[1]} />
      </li>
    </ul>
  );
};
