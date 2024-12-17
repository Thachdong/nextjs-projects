import prismaClient from "@/database/db";
import { generateBaseServices } from "./baseServices";
import { TProduct } from "@/types/product";

const { getById, get } = generateBaseServices<TProduct>(prismaClient.product);



export { getById as getProductById, get as getAllProduct };
