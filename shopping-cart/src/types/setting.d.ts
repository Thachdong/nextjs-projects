type THomePageSetting = {
  heroBanner: {
    url: string;
  };
  title: {
    html: string;
  };
  topCollectionId: {
    content: string;
  };
  policies: {
    icon: string;
    title: string;
    description: string;
  }[];
  onSaleCollections: string[];
  homeCollections: string[];
};

type TContactPageSetting = {
  address: {
    content: string;
  };
  email: {
    content: string;
  };
  phone: {
    content: string;
  };
  banner: {
    content: string;
  };
};

type TAboutPageSetting = {
  banner: {
    content: string;
  };
  collectionIds: string[];
  founders: { id: string; name: string; avatar: string }[];
  reviews: {
    id: string;
    reviews: string;
    username: string;
    avatar: string;
  }[];
};

type TCollectionPageSetting = {
  topCollectionIds: string[];
  ignoreCollectionIds: string[];
};
