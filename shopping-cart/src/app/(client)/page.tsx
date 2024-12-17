import { HomePage } from "@/components/pages/home";
import { getS3Url } from "@/libs/utils/s3-utils";
import { getCollectionById } from "@/services/collectionServices";
import { getPageService } from "@/services/settingServices";
import { EPageName } from "@prisma/client";

export default async function Home() {
  const pageSetting = await getPageService<THomePageSetting>(
    EPageName.HOME_PAGE
  );

  const settings = {
    heroBanner: getS3Url(pageSetting.heroBanner.url),
    title: pageSetting.title.html,
    policies: pageSetting.policies,
  };

  const topCollectionId = pageSetting.topCollectionId.content;

  const onSaleCollectionIds = pageSetting.onSaleCollections;

  const homeCollectionIds = pageSetting.homeCollections;

  const topCollection = await getCollectionById(topCollectionId)

  const onSaleCollections = await Promise.all(onSaleCollectionIds.map((id) => getCollectionById(id)))

  const homeCollections = await Promise.all(homeCollectionIds.map((id) => getCollectionById(id)))

  return (
    <HomePage
      settings={settings}
      topCollection={topCollection}
      onSaleCollections={onSaleCollections.filter(coll => !!coll)}
      homeCollections={homeCollections.filter(coll => !!coll)}
    />
  );
}
