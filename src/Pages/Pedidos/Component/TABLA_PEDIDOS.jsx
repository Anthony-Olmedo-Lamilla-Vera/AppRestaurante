import React, { useState } from "react";
import useSWR from "swr";
import { Fetcher, Rutas } from "../../../Rutas";
import ItemsPedidosBody from "./ItemsPedidosBody";

import ModalPedidRoot from "./ModalPedidRoot";
function TABLA_PEDIDOS({ setpedidos }) {
  const { data, error } = useSWR(Rutas.GET_PEDIDOS, Fetcher);
  console.log(Rutas.GET_PEDIDOS);

  const [IDPedido, setIDPedido] = useState(0);

  if (!data) {
    return <p colSpan={4}>Cargando ...</p>;
  }
  console.log(data);
  if (error) {
    return <p colSpan={4}>Error ...</p>;
  }
  setpedidos(data.data.length);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>N° Mesa</td>
            <td>Cliente</td>
            <td>Hora de Pedido </td>
            <td>Cantidad items Pedido </td>
            <td>Estado Pedido </td>
            <td>Total Pedido </td>
          </tr>
        </thead>
        <ItemsPedidosBody setId={setIDPedido} data={data} />
      </table>
      {IDPedido !== 0 && <ModalPedidRoot data={data} id={IDPedido} />}
    </>
  );
}

export default TABLA_PEDIDOS;
