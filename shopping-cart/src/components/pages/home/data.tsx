import { TCollection, TPolicy, TSaleCollection } from ".";

export const newArrivalCollection: TCollection = {
  id: "1",
  name: "Discover NEW Arrivals",
  description: "Recently added shirts!",
  products: [
    {
      id: "1",
      name: "Plain White Shirt",
      price: 29,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "2",
      name: "Denim Jacket",
      price: 69,
      imageUrl: "/assets/images/product-2.png",
    },
    {
      id: "3",
      name: "Black Polo Shirt",
      price: 59,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "4",
      name: "Blue Sweatshirt",
      price: 49,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "5",
      name: "Blue Plain Shirt",
      price: 50,
      imageUrl: "/assets/images/product-2.png",
    },
    {
      id: "6",
      name: "Dark Blue Shirt",
      price: 60,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "7",
      name: "Outcast T Shirt",
      price: 39,
      imageUrl: "/assets/images/product-2.png",
    },
    {
      id: "8",
      name: "Polo Plain Shirt",
      price: 79,
      imageUrl: "/assets/images/product-1.png",
    },
  ],
};

export const topCollection: TCollection = {
  id: "1",
  name: "Top Sellers",
  description: "Browse our top-selling products",
  products: [
    {
      id: "1topCollection",
      name: "Plain White Shirt",
      price: 29,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "2topCollection",
      name: "Denim Jacket",
      price: 69,
      imageUrl: "/assets/images/product-2.png",
    },
    {
      id: "3topCollection",
      name: "Black Polo Shirt",
      price: 59,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "4topCollection",
      name: "Blue Sweatshirt",
      price: 49,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "5topCollection",
      name: "Blue Plain Shirt",
      price: 50,
      imageUrl: "/assets/images/product-2.png",
    },
    {
      id: "6topCollection",
      name: "Dark Blue Shirt",
      price: 60,
      imageUrl: "/assets/images/product-1.png",
    },
    {
      id: "7topCollection",
      name: "Outcast T Shirt",
      price: 39,
      imageUrl: "/assets/images/product-2.png",
    },
    {
      id: "8topCollection",
      name: "Polo Plain Shirt",
      price: 79,
      imageUrl: "/assets/images/product-1.png",
    },
  ],
};

export const policies: TPolicy[] = [
  {
    iconName: "truck",
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders above $100",
  },
  {
    iconName: "support",
    title: "SUPPORT 24/7",
    description: "Our support team is there to help you for queries",
  },
  {
    iconName: "arrow-circle",
    title: "30 DAYS RETURN",
    description: "Simply return it within 30 days for an exchange.",
  },
  {
    iconName: "fingerprint",
    title: "100% PAYMENT SECURE",
    description: "Our payments are secured with 256 bit encryption",
  },
];

export const saleCollection: TSaleCollection[] = [
  {
    id: "1",
    title: "peace of mind",
    description:
      "A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.",
  },
  {
    id: "2",
    title: "Buy 2 Get 1 Free",
    description:
      "End of season sale. Buy any 2 items of your choice and get 1 free.",
  }
];
