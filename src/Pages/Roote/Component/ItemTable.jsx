import React from "react";

function ItemTable() {
  function openMOdal() {
    console.log("open");
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  return (
    <tr onClick={openMOdal}>
      <td>17</td>
      <td>18h pm</td>
      <td>5</td>
      <td>Pendiente</td>
    </tr>
  );
}

export default ItemTable;
