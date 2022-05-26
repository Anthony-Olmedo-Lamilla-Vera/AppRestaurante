import moment from "moment";
import React from "react";

function ItemTablePedido({
  FechaExp,
  Hora,
  numMesa,
  NombreCliente,
  NumPersonas,
  Estado,
  Precio,
}) {
  function openMOdal() {
    console.log("open");
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  return (
    <tr>
      <td>{moment(FechaExp).format("L")}</td>
      <td>{moment(Hora).format("LT")}</td>
      <td>{numMesa}</td>
      <td>{NombreCliente}</td>
      <td>{NumPersonas}</td>
      <td>{Estado}</td>
      <td>{Precio}</td>
    </tr>
  );
}

export default ItemTablePedido;
