import React from "react";
import ItemTable from "./Component/ItemTable";
import ModalPedidRoot from "./Component/ModalPedidRoot";

function IndexRoot() {
  return (
    <main className="cont-main-root">
      <h1>Pedidos Pendientes</h1>
      <nav>
        <button>Pendientes</button>
        <button>Todos los Pedidos</button>
        <span>Total Pedidos : 17</span>
      </nav>
      <table>
        <thead>
          <tr>
            <td>N° Mesa</td>
            <td>Hora de Pedido </td>
            <td>Cantidad items Pedido </td>
            <td>Estado Pedido </td>
          </tr>
        </thead>
        <tbody>
          <ItemTable />
          <ItemTable />
          <ItemTable />
          <ItemTable />
        </tbody>
      </table>
      <ModalPedidRoot />
    </main>
  );
}

export default IndexRoot;
