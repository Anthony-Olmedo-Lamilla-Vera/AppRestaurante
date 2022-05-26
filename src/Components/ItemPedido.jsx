import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeCantidadStore } from "../Redux/ConfigStore";

function ItemPedido({ Nombre, Precio, img, id, items = [], Cantidad }) {
  const dispatch = useDispatch();
  const [CantidadInput, setCantidadInput] = useState(0);
  function ChangeCantidad(e) {
    const targetvalue = e.target.value;
    setCantidadInput(targetvalue);
    const dispatchs = {
      cantidad: parseInt(targetvalue),
      id: id,
    };
    dispatch(ChangeCantidadStore(dispatchs));
  }

  return (
    <article className="item-pedido">
      <div className="img-pedido">
        <img src={img} alt="" />
      </div>
      <div className="text-pedido">
        <h1>{Nombre}</h1>

        {items.length > 0 ? (
          <ul>
            {items.map((it) => {
              it.nombre;
            })}
          </ul>
        ) : (
          <p>Item individual</p>
        )}
        <p>$ {Precio}</p>
        <select onChange={ChangeCantidad} defaultValue={Cantidad}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    </article>
  );
}

export default ItemPedido;
