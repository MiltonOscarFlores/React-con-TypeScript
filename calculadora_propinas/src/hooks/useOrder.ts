import { useState } from "react";
import type { OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]); // generic type para que todo lo que venga del pedido order revise la estructura de ese type

  const addItem = () => {
    console.log("agregando DESDE additem");
  };
  return {
    addItem,
  };
}
