import React, { useState } from "react";
import ItemPedido from "../../../Components/ItemPedido";
import Modal from "../../../Components/Modal";

function ItemTable({
  num_mesa,
  totalPedido,
  hora_pedido,
  cantidaditems,
  estado,
  id,
  cliente,
  productos = [],
  setId,
}) {
  function openMOdal() {
    setId(id);
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
  }

  return (
    <React.Fragment>
      <tr onClick={openMOdal}>
        <td>{num_mesa}</td>
        <td>{cliente}</td>
        <td>{hora_pedido}</td>
        <td>{cantidaditems}</td>
        <td>{estado}</td>
        <td> $ {totalPedido}</td>
      </tr>
    </React.Fragment>
  );
}

export default ItemTable;
