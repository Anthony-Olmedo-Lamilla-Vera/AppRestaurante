import axios from "axios";
import React from "react";
import { VscError } from "react-icons/vsc";
import ItemPedido from "../../../Components/ItemPedido";
import Modal from "../../../Components/Modal";
import { Rutas } from "../../../Rutas";

function ModalPedidRoot({ data, id }) {
  async function ConfirmarPedido() {
    await axios
      .put(Rutas.PUT_PEDIDOS + id)
      .then((item) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  return (
    <Modal
      Title={"Pedidos"}
      Action={ConfirmarPedido}
      button={"Confirmar Pedido"}
    >
      <div className="cont-item-pedidos">
        {data.data
          .find((item) => item._id === id)
          .Productos.map((item, key) => {
            return (
              <ItemPedido
                key={key}
                Cantidad={item.cantidad}
                Nombre={item.nombre}
                Precio={item.precio}
                img={item.img}
                items={item.items}
              />
            );
          })}
      </div>
    </Modal>
  );
}

export default ModalPedidRoot;
