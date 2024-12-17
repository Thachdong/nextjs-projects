import React, { ReactNode } from "react";
import Link from "next/link";

import { Button } from "../../atoms/button";
import { useBackgroundImage } from "@/libs/hooks/useBackgroundImage";

type THeroBannerProps = {
  bannerUrl: string;
  title: string;
  linkTo: string;
};

export const HeroBanner: React.FC<THeroBannerProps> = ({
  bannerUrl,
  title,
  linkTo,
}) => {
  const backgroundImage = useBackgroundImage(bannerUrl)

  return (
    <section className="w-full h-[648px] flex justify-end items-center" style={{ ...backgroundImage }}>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl text-white uppercase mb-4" dangerouslySetInnerHTML={{ __html: title}}></h1>

        <Link href={linkTo}>
          <Button variant="outline">shop now</Button>
        </Link>
      </div>
    </section>
  );
};
