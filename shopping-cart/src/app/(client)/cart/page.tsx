import { CartPage } from "@/components/pages/cart";

export type TProductCart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type TCart = {
  total: number;
  products: TProductCart[];
};

const MOCK_DATA: TCart = {
  total: 99,
  products: [
    {
      id: "prod-1",
      name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
      price: 20,
      quantity: 1,
    },
    {
      id: "prod-2",
      name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
      price: 20,
      quantity: 1,
    },
    {
      id: "prod-3",
      name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
      price: 20,
      quantity: 1,
    },
    {
      id: "prod-4",
      name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
      price: 20,
      quantity: 1,
    },
  ],
};

export default function Cart() {
  return <CartPage data={MOCK_DATA} />;
}
