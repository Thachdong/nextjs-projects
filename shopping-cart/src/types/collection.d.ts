import { Collection, Product, BlogPost } from '@prisma/client';

type TCollection = Collection & {
    products?: Product[]
    blogPosts?: BlogPost[]
}