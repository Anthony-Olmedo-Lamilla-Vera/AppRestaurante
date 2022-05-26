import React from "react";
import ItemTableReserva from "../../../Components/ItemTableReserva";
import Modal from "../../../Components/Modal";
import BodyCliente from "./Components/BodyCliente";

function IndexCliente() {
  function openMOdal() {
    console.log("open");
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  return (
    <main className="cont-main-root">
      <h1>Clientes</h1>
      <div className="table-reservas">
        <table>
          <thead>
            <tr>
              <td>N|Cedula</td>
              <td>Nombres</td>
              <td>Fecha de Nacimiento</td>
              <td>Edad</td>
              <td>Historial de Reservas </td>
            </tr>
          </thead>

          <tbody>
            <BodyCliente />
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default IndexCliente;
