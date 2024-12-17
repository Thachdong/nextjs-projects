import { PageBanner } from "@/components/molecules/page-banner";
import { AboutCollection } from "@/components/organasims/about-collections";
import { AboutFounder } from "@/components/organasims/about-founder";
import { AboutReviews } from "@/components/organasims/about-reviews";
import { TCollection } from "@/types/collection";
import React from "react";

type TAboutPageProps = {
  banner: string;
  collections: TCollection[];
  founders: TAboutPageSetting["founders"];
  reviews: TAboutPageSetting["reviews"];
};

export const AboutPage: React.FC<TAboutPageProps> = ({
  banner,
  collections,
  founders,
  reviews,
}) => {
  return (
    <main>
      <PageBanner title="About Moni.SH" bannerUrl={banner} />

      <section className="content-container flex flex-col gap-12 py-12">
        <AboutCollection collections={collections} />

        <AboutFounder founders={founders} />

        <AboutReviews reviews={reviews} />
      </section>
    </main>
  );
};
