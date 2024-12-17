import { useBackgroundImage } from "@/libs/hooks/useBackgroundImage";
import { getS3Url } from "@/libs/utils/s3-utils";
import React, { ReactNode } from "react";

type TPageBanner = {
  bannerUrl: string;
  title: ReactNode;
};

export const PageBanner: React.FC<TPageBanner> = ({ bannerUrl, title }) => {
  const backgroundImage = useBackgroundImage(getS3Url(bannerUrl));
  return (
    <section
      className="w-full h-[348px] flex items-end p-12"
      style={backgroundImage}
    >
      <h1 className="uppercase text-5xl text-white">{title}</h1>
    </section>
  );
};
