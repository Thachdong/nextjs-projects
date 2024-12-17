import prismaClient from "@/database/db";
import { generateBaseServices } from "./baseServices";
import { TCollection } from "@/types/collection";

const { get, getById, create, update, deleteById } =
  generateBaseServices<TCollection>(prismaClient.collection);

const include = {
  products: true,
  blogPosts: true
}

const getCollectionById = (id: string) => getById(id, include)

const getCollections = () => get({ include })

export {
  getCollections,
  getCollectionById,
  create as createCollection,
  update as updateCollection,
  deleteById as deleteCollectionById,
};
