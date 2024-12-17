import { BlogPost, Product } from "@prisma/client";

type TProduct = Product & {
    posts?: BlogPost
}