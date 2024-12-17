import { TCart, TProductCart } from "@/app/(client)/cart/page";
import { Button } from "@/components/atoms/button";
import Link from "next/link";
import React, { useCallback } from "react";

type TCardPage = {
  data: TCart;
};

export const CartPage: React.FC<Readonly<TCardPage>> = ({ data }) => {
  const renderProduct = useCallback(
    (prod: TProductCart) => (
      <tr key={prod.id} className="border-b border-gray-200">
        <td className="p-3 text-gray-300 cursor-pointer">x</td>
        <td className="p-3 font-bold">{prod.name}</td>
        <td className="p-3">${prod.price.toFixed(2)}</td>
        <td className="p-3">
          <input
            className="w-8 h-8 border border-gray-200 py-2 text-center"
            defaultValue={prod.quantity}
          />
        </td>
        <td className="p-3">${(prod.price * prod.quantity).toFixed(2)}</td>
      </tr>
    ),
    []
  );
  return (
    <section className="content-container py-8">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th></th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-left">Total</th>
          </tr>
        </thead>

        <tbody>
          {data.products.map(renderProduct)}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="border-b border-gray-200 p-3 text-xl" colSpan={2}>
              Total:
              <span className="px-4 text-primary font-bold">
                ${data.total.toFixed(2)}
              </span>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="p-3 text-center" colSpan={2}>
              <Link href="/checkout">
                <Button variant="secondary">process to checkout</Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
