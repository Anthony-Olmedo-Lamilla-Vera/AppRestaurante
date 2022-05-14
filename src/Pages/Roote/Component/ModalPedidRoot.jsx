import React from "react";
import { VscError } from "react-icons/vsc";
import ItemPedido from "../../../Components/ItemPedido";

function ModalPedidRoot() {
  function closeModal() {
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  return (
    <section className="modal-pedido">
      <div className="icon-cerrarPedido" onClick={closeModal}>
        <VscError size={40} />
      </div>
      <div className="cont-modal">
        <h4>Detalle Pedido </h4>
        <div className="cont-item-pedidos">
          <ItemPedido />
          <ItemPedido />
          <ItemPedido />
          <ItemPedido />
        </div>
        <div className="confirm-pedido">
          <button onClick={closeModal}>Pedido Realizado</button>
        </div>
      </div>
    </section>
  );
}

export default ModalPedidRoot;
