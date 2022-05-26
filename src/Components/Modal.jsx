import React from "react";
import { VscError } from "react-icons/vsc";

function Modal({ children, button, Action, isButton = true, Title }) {
  function closeModal() {
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
  }
  return (
    <section className="modal-pedido">
      <div className="icon-cerrarPedido" onClick={closeModal}>
        <VscError size={40} />
      </div>
      <div className="cont-modal">
        <h4>{Title}</h4>
        {children}
        {isButton && (
          <div className="confirm-pedido">
            <button onClick={Action}>{button}</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Modal;
