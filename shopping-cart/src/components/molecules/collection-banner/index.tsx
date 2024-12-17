import { useBackgroundImage } from "@/libs/hooks/useBackgroundImage";
import { getS3Url } from "@/libs/utils/s3-utils";
import React from "react";

type TCollectionBannerProps = {
  bannerUrl: string;
  collectionName: string;
  collectionDescription: string;
};

export const CollectionBanner: React.FC<TCollectionBannerProps> = ({
  bannerUrl,
  collectionName,
  collectionDescription,
}) => {
  const backgroundImage = useBackgroundImage(getS3Url(bannerUrl));
  return (
    <section
      className="w-full h-[648px] flex flex-col justify-center items-center"
      style={backgroundImage}
    >
      <h1 className="text-5xl text-white font-bold">{collectionName}</h1>
      <p className="text-white">{collectionDescription}</p>
    </section>
  );
};
