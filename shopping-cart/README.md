This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Pages:
1. Home
2. About
3. Contact
4. Cart
5. Checkout
6. Collection
7. Collection detail
8. Product
9. Product detail
10. Oder


## Services
1. Settings
    - HOME PAGE
        + Hero banner
        + Page title
        + Top collection id
        + Policies
        + Onsale collection ids
        + Home collection ids

    - CONTACT PAGE
        + Shop's address
        + Shop's email
        + Shop's phone number
        + Contact page banner

    - ABOUT PAGE
        + About banner
        + Collection ids
        + Founder data
        + Top reviews
    
    - COLLECTION PAGE
        + Top Collection id
        + Ignore collection ids

2. Collection
    - Get collection list
    - Get collection detail

3. Product
    - Get product list by collection id
    - Get product by id
    - Get all product

4. Cart
    - Get cart by user id
    - Get cart by cookie
    - Create cart

6. Order
    - Get order list by user id
    - Create order 