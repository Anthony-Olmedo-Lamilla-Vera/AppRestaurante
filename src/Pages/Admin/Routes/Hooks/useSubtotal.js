import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useSubtotal() {
  const number = useSelector((data) => data.Pedido);
  const [Total, setTotal] = useState(0);
  const numcart = number.length;
  useEffect(() => {
    let subtotal = 0;
    number.map((item) => {
      subtotal += item.precio * item.cantidad;
    });
    setTotal(subtotal);
  }, [number]);
  return { Total, numcart };
}
