import { Button } from "@/components/atoms/button";
import { getS3Url } from "@/libs/utils/s3-utils";
import { TCollection } from "@/types/collection";
import Link from "next/link";
import React, { CSSProperties, useCallback } from "react";

type TAboutCollectionProps = {
  collections: TCollection[];
};

export const AboutCollection: React.FC<TAboutCollectionProps> = ({
  collections,
}) => {
  const renderCollection = useCallback((coll: TCollection) => {
    const backgroundImage: CSSProperties = {
        backgroundImage: `url(${getS3Url(coll.bannerUrl)})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
      <div key={coll.id} className="flex items-end justify-center p-12 w-[calc(50%-0.5rem)] h-[600px]" style={backgroundImage}>
        <Link href={`/collections/${coll.id}`}>
          <Button variant="rounded">buy now</Button>
        </Link>
      </div>
    );
  }, []);

  return <section className="flex flex-wrap gap-4">{collections.map(renderCollection)}</section>;
};
