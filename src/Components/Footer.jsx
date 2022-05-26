import axios from "axios";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useSubtotal } from "../Pages/Admin/Routes/Hooks/useSubtotal";
import { Rutas } from "../Rutas";
import ItemPedido from "./ItemPedido";

function Footer() {
  const Data = useSelector((data) => data.Pedido);
  const params = useParams();
  const { Total, numcart } = useSubtotal();
  console.log(Data);
  function openMOdal() {
    console.log("open");
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
    console.log(modal);
  }
  async function ConfirmCompra(e) {
    e.preventDefault();
    await axios
      .post(Rutas.POST_PEDIDOS, {
        Total: Total,
        Cantidad: numcart,
        Productos: Data,
        ID_Cliente: params.id,
        Mesa: params.mesa,
      })
      .then((data) => {
        console.log("Pedido sastifactorio");
        const modal = document.querySelector(".modal-pedido");
        modal.classList.toggle("open-modal");
        console.log(modal);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  return (
    <React.Fragment>
      <footer onClick={openMOdal}>
        <nav className="nav-pedidos">
          <ul>
            <li>
              Total Pedido : <span>{numcart} item</span>
            </li>
            <li>
              <span>$ {Total}</span>
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
            <button onClick={openMOdal}>Seguir Comprando</button>
          </div>
          <h4>Detalle Pedido </h4>
          <div className="cont-item-pedidos">
            {Data.map((item, key) => {
              return (
                <ItemPedido
                  key={key}
                  id={item.id}
                  img={item.img}
                  Nombre={item.nombre}
                  Precio={item.precio}
                  Cantidad={item.cantidad}
                  items={item.items}
                />
              );
            })}
          </div>
          <div className="cont-total-pedido"></div>
          <div className="confirm-pedido">
            <button onClick={ConfirmCompra}>Confirmar Pedido $15 </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
