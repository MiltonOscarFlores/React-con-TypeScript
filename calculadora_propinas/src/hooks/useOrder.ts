import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]); // generic type para que todo lo que venga del pedido order revise la estructura de ese type

  const addItem = (item: MenuItem) => {
    const newItem = { ...item, quantity: 1 };
    setOrder([...order, newItem]);
  };
  return {
    addItem,
  };
}
