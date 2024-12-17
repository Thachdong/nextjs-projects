import Link from "next/link";
import React, { useCallback } from "react";

export type TBreadcrumbsProps = {
  items: {
    title: string;
    path: string;
  }[];
  currentIndex: number;
};

export const Breadcrumbs: React.FC<Readonly<TBreadcrumbsProps>> = ({
  items,
  currentIndex,
}) => {
  const renderBreadcrumbsItem = useCallback(
    ({ title, path }: TBreadcrumbsProps["items"][0], index: number) => {
      const activeColor = currentIndex < index ? "text-black" : "text-gray-400";
      return (
        <>
          <Link className={`uppercase font-bold ${activeColor}`} href={path}>
            {title}
          </Link>
          <span className={`font-bold ${activeColor}`}>|</span>
        </>
      );
    },
    []
  );
  return <div className="flex gap-1">{items.map(renderBreadcrumbsItem)}</div>;
};
