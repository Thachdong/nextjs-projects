const { PrismaClient, EPageName } = require("@prisma/client");

// #region -- setting table
const MOCK_CONTACT_PAGE = [
  {
    page: EPageName.CONTACT_PAGE,
    key: "address",
    value: { content: "GO VAP, HCM CITY, VIETNAM" },
  },
  {
    page: EPageName.CONTACT_PAGE,
    key: "email",
    value: { content: "moni-shop@gmail.com" },
  },
  {
    page: EPageName.CONTACT_PAGE,
    key: "phone",
    value: { content: "+84353860797" },
  },
  {
    page: EPageName.CONTACT_PAGE,
    key: "banner",
    value: { content: "setting/contact-banner.png" },
  },
];

const MOCK_ABOUT_PAGE = [
  {
    page: EPageName.ABOUT_PAGE,
    key: "banner",
    value: { content: "setting/about-banner.png" },
  },
  {
    page: EPageName.ABOUT_PAGE,
    key: "collections",
    value: { content: ["cm4tbjn7n0000m2f0x19psj93", "cm4tbjn7n0001m2f0fpcjr90i"] },
  },
  {
    page: EPageName.ABOUT_PAGE,
    key: "founders",
    value: {
      content: [
        { name: "dongt", avatar: "setting/collection-banner-1.png" },
        { name: "tuyenp", avatar: "setting/collection-banner-2.png" },
      ],
    },
  },
  {
    page: EPageName.ABOUT_PAGE,
    key: "reviews",
    value: {
      content: [
        {
          id: "1",
          username: "Stacy",
          review:
            "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
        },
        {
          id: "2",
          username: "James",
          review:
            "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
        },
        {
          id: "3",
          username: "Tiffany",
          review:
            "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
        },
      ],
    },
  },
];

const MOCK_COLLECTION_PAGE = [
  {
    page: EPageName.COLLECTION_PAGE,
    key: "topCollection",
    value: {
      content: ["cm4tbjn7n0000m2f0x19psj93", "cm4tbjn7n0001m2f0fpcjr90i", "cm4tbjn7n0002m2f06pman1px"],
    },
  },
  {
    page: EPageName.COLLECTION_PAGE,
    key: "ignoreCollection",
    value: {
      content: [],
    },
  },
];

const MOCK_HOME_PAGE = [
  {
    page: EPageName.HOME_PAGE,
    key: "heroBanner",
    value: { url: "setting/home-banner.png" },
  },
  {
    page: EPageName.HOME_PAGE,
    key: "title",
    value: { html: "<h1>STYLIST PICKS BEAT </br> THE HEAT</h1>" },
  },
  {
    page: EPageName.HOME_PAGE,
    key: "topCollection",
    value: { content: "cm4tbjn7n0000m2f0x19psj93" },
  },
  {
    page: EPageName.HOME_PAGE,
    key: "policies",
    value: [
      {
        icon: "truck",
        title: "Free Shipping",
        description: "Enjoy free shipping on all orders above $100",
      },
      {
        icon: "support",
        title: "SUPPORT 24/7",
        description: "Our support team is there to help you for queries",
      },
      {
        icon: "arrow-circle",
        title: "30 DAYS RETURN",
        description: "Simply return it within 30 days for an exchange.",
      },
      {
        icon: "fingerprint",
        title: "100% PAYMENT SECURE",
        description: "Our payments are secured with 256 bit encryption",
      },
    ],
  },
  {
    page: EPageName.HOME_PAGE,
    key: "onSaleCollections",
    value: ["cm4tbjn7n0000m2f0x19psj93"],
  },
  {
    page: EPageName.HOME_PAGE,
    key: "homeCollections",
    value: ["cm4tbjn7n0000m2f0x19psj93"],
  },
];

async function seedSetting() {
  const prisma = new PrismaClient();

  await prisma.pageSetting.createMany({
    data: [
      ...MOCK_CONTACT_PAGE,
      ...MOCK_ABOUT_PAGE,
      ...MOCK_COLLECTION_PAGE,
      ...MOCK_HOME_PAGE,
    ],
  });

  prisma.$disconnect();
}

// seedSetting()
// #endregion

// #region -- collection table
const MOCK_COLLECTION = [
  {
    name: "New Arrival",
    description: "Recently added shirts!",
    bannerUrl: "collection/collection-banner-1.png",
  },
  {
    name: "Top Sellers",
    description: "Browse our top-selling products",
    bannerUrl: "collection/collection-banner2.png",
  },
  {
    name: "BUY 2 GET 1 FREE",
    description:
      "End of season sale. Buy any 2 items of your choice and get 1 free.",
    bannerUrl: "collection/collection-banner1.png",
  },
  {
    name: "PEACE OF MIND",
    description:
      "A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.",
    bannerUrl: "collection/collection-banner2.png",
  },
  {
    name: "BUY 2 GET 1 FREE",
    description:
      "End of season sale. Buy any 2 items of your choice and get 1 free.",
    bannerUrl: "collection/collection-banner1.png",
  },
  {
    name: "Spring collection",
    description: "Spring collection",
    bannerUrl: "collection/collection-banner1.png",
  },
];

async function seedCollection() {
  const prisma = new PrismaClient();

  await prisma.collection.createMany({
    data: MOCK_COLLECTION,
  });

  prisma.$disconnect();
}

// seedCollection()
// #endregion

// #region -- product table
const MOCK_PRODUCTS = [
  {
    name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
    description: "Áo polo len kẻ sọc tay ngắn xanh đậm",
    imgUrl:
      "product/product-1.png",
    price: 139,
    stock: 999,
    collectionId: "cm4tbjn7n0000m2f0x19psj93",
  },
  {
    name: "Set đầm 2 dây ôm body trắng áo khoác cardigan kẻ caro xanh dương S62",
    description:
      "Set đầm 2 dây ôm body trắng áo khoác cardigan kẻ caro xanh dương S62",
    imgUrl:
      "product/product-1.png",
    price: 139,
    stock: 999,
    collectionId: "cm4tbjn7n0000m2f0x19psj93",
  },
  {
    name: "Áo len trễ vai tay dài đỏ đô",
    description: "Áo len trễ vai tay dài đỏ đô",
    imgUrl:
      "product/product-1.png",
    price: 139,
    stock: 999,
    collectionId: "cm4tbjn7n0001m2f0fpcjr90i",
  },
  {
    name: "Đầm hoa nhí suông dài xẻ tà nhún ngực tay ngắn bo phồng nhẹ mặc được 2 kiểu D85",
    description:
      "Đầm hoa nhí suông dài xẻ tà nhún ngực tay ngắn bo phồng nhẹ mặc được 2 kiểu D85",
    imgUrl:
      "product/product-1.png",
    price: 139,
    stock: 999,
    collectionId: "cm4tbjn7n0001m2f0fpcjr90i",
  },
  {
    name: "Jumpsuit xếp ly ngực thắt nơ lưng đỏ đô",
    description: "Jumpsuit xếp ly ngực thắt nơ lưng đỏ đô",
    imgUrl:
      "product/product-1.png",
    price: 139,
    stock: 999,
    collectionId: "cm4tbjn7n0002m2f06pman1px",
  },
  {
    name: "Áo kiểu croptop cổ bèo trắng tay ngắn phồng ôm eo nút bọc A16",
    description:
      "Áo kiểu croptop cổ bèo trắng tay ngắn phồng ôm eo nút bọc A16",
    imgUrl:
      "product/product-1.png",
    price: 139,
    stock: 999,
    collectionId: "cm4tbjn7n0002m2f06pman1px",
  },
  {
    name: "Áo sơ mi nữ tay dài beo nâu chất kate mịn chuẩn <52kg A10",
    description: "Áo sơ mi nữ tay dài beo nâu chất kate mịn chuẩn <52kg A10",
    imgUrl:
      "product/product-1.png",
    price: 139,
    stock: 999,
    collectionId: "cm4tbjn7n0002m2f06pman1px",
  },
];

async function seedProduct() {
  const prisma = new PrismaClient();

  await prisma.product.createMany({
    data: MOCK_PRODUCTS,
  });

  prisma.$disconnect();
}

seedProduct()
// #endregion
