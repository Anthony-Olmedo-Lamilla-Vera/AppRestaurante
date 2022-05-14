import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import ItemPedido from "./ItemPedido";

function Footer() {
  function openMOdal() {
    console.log("open");
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  function closeModal() {
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  return (
    <React.Fragment>
      <footer onClick={openMOdal}>
        <nav className="nav-pedidos">
          <ul>
            <li>
              Total Pedido : <span>5 item</span>
            </li>
            <li>
              <span>$30</span>
            </li>
            <li>
              <AiOutlineArrowUp />
            </li>
          </ul>
        </nav>
      </footer>

      <section className="modal-pedido">
        <div className="cont-modal">
          <div className="button-cerrar-modal">
            <button onClick={closeModal}>Seguir Comprando</button>
          </div>
          <h4>Detalle Pedido </h4>
          <div className="cont-item-pedidos">
            <ItemPedido />
            <ItemPedido />
            <ItemPedido />
            <ItemPedido />
          </div>
          <div className="cont-total-pedido"></div>
          <div className="confirm-pedido">
            <button onClick={closeModal}>Confirmar Pedido $15 </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
