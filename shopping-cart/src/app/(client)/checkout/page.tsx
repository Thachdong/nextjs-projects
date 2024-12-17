import { CheckoutPage } from "@/components/pages/checkout";

export type TProductOrder = {
  id: string;
  name: string;
  quantity: number;
  subTotal: number;
};

const MOCK_DATA: TProductOrder[] = [
  {
    id: "prod-1",
    name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
    subTotal: 20,
    quantity: 1,
  },
  {
    id: "prod-2",
    name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
    subTotal: 20,
    quantity: 1,
  },
  {
    id: "prod-3",
    name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
    subTotal: 20,
    quantity: 1,
  },
  {
    id: "prod-4",
    name: "Áo polo len kẻ sọc tay ngắn xanh đậm",
    subTotal: 20,
    quantity: 1,
  },
];

export default function Checkout() {
  return <CheckoutPage products={MOCK_DATA} />;
}
