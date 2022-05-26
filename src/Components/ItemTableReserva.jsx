import moment from "moment";
import React from "react";

function ItemTableReserva({ Cedula, Nombre, FechaNacimiento, Edad }) {
  function openMOdal() {
    console.log("open");
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  return (
    <tr>
      <td>{Cedula}</td>
      <td>{Nombre}</td>
      <td>{moment(FechaNacimiento).format("L")}</td>
      <td>{moment(FechaNacimiento, "YYYYMMDD").fromNow()}</td>
      <td>Reservas</td>
    </tr>
  );
}

export default ItemTableReserva;
