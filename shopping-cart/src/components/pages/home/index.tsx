import { CollectionHeader } from "@/components/atoms/collection-header";
import { HeroBanner } from "@/components/molecules/hero-banner";
import { Policies } from "@/components/organasims/policies";
import React from "react";
import { SaleCollection } from "@/components/organasims/sale-collection";
import { Button } from "@/components/atoms/button";
import { TCollection } from "@/types/collection";
import { ProductList } from "@/components/organasims/product-list";
import Link from "next/link";

export type TProduct = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export type TSaleCollection = {
  id: string;
  title: string;
  description: string;
};

type THomePageProps = {
  settings: {
    heroBanner: string;
    title: string;
    policies: THomePageSetting["policies"];
  };
  topCollection?: TCollection;
  onSaleCollections: TCollection[];
  homeCollections: TCollection[];
};

export function HomePage({
  settings,
  topCollection,
  onSaleCollections,
  homeCollections,
}: Readonly<THomePageProps>) {
  return (
    <>
      <HeroBanner
        bannerUrl={settings.heroBanner}
        title={settings.title}
        linkTo="/collections"
      />

      {topCollection && (
        <section className="content-container flex flex-col gap-6 py-12">
          <CollectionHeader
            header={topCollection.name}
            description={topCollection.description}
          />

          <ProductList products={topCollection.products || []} />
        </section>
      )}

      <section className="content-container py-12">
        <Policies policies={settings.policies} />
      </section>

      <section className="content-container py-12">
        <SaleCollection collections={onSaleCollections} />
      </section>

      {homeCollections.map((coll) => (
        <section
          key={coll.id}
          className="content-container flex flex-col gap-6 py-12"
        >
          <CollectionHeader header={coll.name} description={coll.description} />

          <ProductList products={coll.products || []} />

          <Link href={`/collections/${coll.id}`} className="text-center">
            <Button variant="primary" className="w-32 mx-auto">
              shop now
            </Button>
          </Link>
        </section>
      ))}
    </>
  );
}
