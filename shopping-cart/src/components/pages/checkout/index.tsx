import { TProductOrder } from "@/app/(client)/checkout/page";
import { Button } from "@/components/atoms/button";
import { BillingForm } from "@/components/organasims/billing-form";
import React, { useCallback } from "react";

type TCheckoutPageProps = {
  products: TProductOrder[];
};

export const CheckoutPage: React.FC<TCheckoutPageProps> = ({ products }) => {
  const renderProduct = useCallback(
    (prod: TProductOrder) => (
      <tr className="border">
        <td className="p-3">{prod.name}</td>
        <td className="p-3">{prod.quantity}</td>
        <td className="p-3">${prod.subTotal.toFixed(2)}</td>
      </tr>
    ),
    []
  );
  return (
    <section className="content-container pt-8 pb-16">
      <h2 className="text-3xl mb-4">Billing details</h2>

      <div className="w-1/2 mb-8">
        <BillingForm />
      </div>

      <h2 className="text-3xl mb-4">Your order</h2>

      <table className="w-full">
        <thead>
          <tr className="border">
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-left">SubTotal</th>
          </tr>
        </thead>

        <tbody>
          {products.map(renderProduct)}
          <tr>
            <td></td>
            <td className="font-bold p-3 border border-r-0">Shipping Fee</td>
            <td className="p-3 border border-l-0">$5.00</td>
          </tr>

          <tr>
            <td></td>
            <td className="font-bold p-3 border border-r-0">Total</td>
            <td className="font-bold text-secondary p-3 border border-l-0">$200.00</td>
          </tr>

          <tr>
            <td></td>
            <td colSpan={2} className="p-3 border text-center">
                <Button variant='secondary'>Place order</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
