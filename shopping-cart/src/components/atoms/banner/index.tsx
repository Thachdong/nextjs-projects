import { useBackgroundImage } from "@/libs/hooks/useBackgroundImage";
import React from "react";

type TBannerProps = {
  title: string;
  bannerUrl: string;
};

export const Banner: React.FC<TBannerProps> = ({ title, bannerUrl }) => {
  const backgroundImage = useBackgroundImage(bannerUrl)
  return (
    <section className="h-[348px] flex items-end" style={{ ...backgroundImage }}>
      <h1 className="uppercase">{title}</h1>    
    </section>
  );
};
