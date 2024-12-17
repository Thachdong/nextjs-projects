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
    value: { content: "/assets/images/contact-banner.png" },
  },
];

const MOCK_ABOUT_PAGE = [
  {
    page: EPageName.ABOUT_PAGE,
    key: "banner",
    value: { content: "/assets/images/about-banner.png" },
  },
  {
    page: EPageName.ABOUT_PAGE,
    key: "collections",
    value: { content: ["collection-1", "collection-2"] },
  },
  {
    page: EPageName.ABOUT_PAGE,
    key: "founders",
    value: {
      content: [
        { name: "dongt", avatar: "/assets/images/collection-banner-1.png" },
        { name: "tuyenp", avatar: "/assets/images/collection-banner-2.png" },
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
      content: ["coll-1", "coll-2", "coll-3"],
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
    value: { url: "/assets/images/home-banner.png" },
  },
  {
    page: EPageName.HOME_PAGE,
    key: "title",
    value: { html: "<h1>STYLIST PICKS BEAT </br> THE HEAT</h1>" },
  },
  {
    page: EPageName.HOME_PAGE,
    key: "topCollection",
    value: { content: "coll-1" },
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
    value: ["coll-2", "coll-3"],
  },
  {
    page: EPageName.HOME_PAGE,
    key: "homeCollections",
    value: ["coll-4", "coll-5"],
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
    bannerUrl: "/assets/images/collection-banner-1.png",
  },
  {
    name: "Top Sellers",
    description: "Browse our top-selling products",
    bannerUrl: "/assets/images/collection-banner2.png",
  },
  {
    name: "BUY 2 GET 1 FREE",
    description:
      "End of season sale. Buy any 2 items of your choice and get 1 free.",
    bannerUrl: "/assets/images/collection-banner1.png",
  },
  {
    name: "PEACE OF MIND",
    description:
      "A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.",
    bannerUrl: "/assets/images/collection-banner2.png",
  },
  {
    name: "BUY 2 GET 1 FREE",
    description:
      "End of season sale. Buy any 2 items of your choice and get 1 free.",
    bannerUrl: "/assets/images/collection-banner1.png",
  },
  {
    name: "Spring collection",
    description: "Spring collection",
    bannerUrl: "/assets/images/collection-banner1.png",
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
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3j5t3x07oh478_tn.webp",
    price: 139,
    stock: 999,
    collectionId: "cm4oduihg0000566n09ap6q4c",
  },
  {
    name: "Set đầm 2 dây ôm body trắng áo khoác cardigan kẻ caro xanh dương S62",
    description:
      "Set đầm 2 dây ôm body trắng áo khoác cardigan kẻ caro xanh dương S62",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/sg-11134201-23020-gjs5hs9vy8mv3e_tn.webp",
    price: 139,
    stock: 999,
    collectionId: "cm4oduihg0000566n09ap6q4c",
  },
  {
    name: "Áo len trễ vai tay dài đỏ đô",
    description: "Áo len trễ vai tay dài đỏ đô",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3j5t3x07oh478_tn.webp",
    price: 139,
    stock: 999,
    collectionId: "cm4oduihg0000566n09ap6q4c",
  },
  {
    name: "Đầm hoa nhí suông dài xẻ tà nhún ngực tay ngắn bo phồng nhẹ mặc được 2 kiểu D85",
    description:
      "Đầm hoa nhí suông dài xẻ tà nhún ngực tay ngắn bo phồng nhẹ mặc được 2 kiểu D85",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3j5t3x07oh478_tn.webp",
    price: 139,
    stock: 999,
    collectionId: "cm4oduihg0000566n09ap6q4c",
  },
  {
    name: "Jumpsuit xếp ly ngực thắt nơ lưng đỏ đô",
    description: "Jumpsuit xếp ly ngực thắt nơ lưng đỏ đô",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3j5t3x07oh478_tn.webp",
    price: 139,
    stock: 999,
    collectionId: "cm4oduihg0000566n09ap6q4c",
  },
  {
    name: "Áo kiểu croptop cổ bèo trắng tay ngắn phồng ôm eo nút bọc A16",
    description:
      "Áo kiểu croptop cổ bèo trắng tay ngắn phồng ôm eo nút bọc A16",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3j5t3x07oh478_tn.webp",
    price: 139,
    stock: 999,
    collectionId: "cm4oduihg0000566n09ap6q4c",
  },
  {
    name: "Áo sơ mi nữ tay dài beo nâu chất kate mịn chuẩn <52kg A10",
    description: "Áo sơ mi nữ tay dài beo nâu chất kate mịn chuẩn <52kg A10",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3j5t3x07oh478_tn.webp",
    price: 139,
    stock: 999,
    collectionId: "cm4oduihg0000566n09ap6q4c",
  },
];

async function seedProduct() {
  const prisma = new PrismaClient();

  await prisma.product.createMany({
    data: MOCK_PRODUCTS,
  });

  prisma.$disconnect();
}

// seedProduct()
// #endregion
