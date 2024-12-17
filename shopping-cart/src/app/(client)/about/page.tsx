import { AboutPage } from "@/components/pages/about";
import { getCollectionById } from "@/services/collectionServices";
import { getPageService } from "@/services/settingServices";
import { EPageName } from "@prisma/client";

export default async function About() {
  const settings = await getPageService<TAboutPageSetting>(
    EPageName.ABOUT_PAGE
  );

  const collectionIds = settings.collectionIds;

  const collections = (
    await Promise.all(collectionIds.map((id) => getCollectionById(id)))
  ).filter((coll) => !!coll);

  return (
    <AboutPage
      banner={settings.banner.content}
      collections={collections}
      founders={settings.founders}
      reviews={settings.reviews}
    />
  );
}
