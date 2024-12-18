import { Collection, Product, BlogPost } from "@prisma/client";

type TCollection = Collection & {
  products?: Product[];
  blogPosts?: BlogPost[];
};

type TCollectionForm = {
  name: string;
  description: string;
  productIds: string[];
  blogIds: string[];
};
