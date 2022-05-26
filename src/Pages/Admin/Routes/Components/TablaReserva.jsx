import React from "react";
import ItemTablePedido from "../../../Pedidos/Component/ItemTablePedido";
import TbodyReserva from "./TbodyReserva";

function TablaReserva() {
  return (
    <table>
      <thead>
        <tr>
          <td>Fecha Expedicion</td>
          <td>Hora de Reserva</td>
          <td>N° Mesa</td>
          <td>Nombre Cliente</td>
          <td>Numero de Personas</td>
          <td>Estado</td>
          <td>Precio</td>
        </tr>
      </thead>
      <TbodyReserva />
    </table>
  );
}

export default TablaReserva;
