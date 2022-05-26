import React from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/ConfigStore";

function CardItem({ nombre, precio, id, img, cantidad, items = [] }) {
  const dispatch = useDispatch();
  function addItem() {
    const data = { nombre, precio, id, cantidad, img, items };
    dispatch(AddItem(data));
  }
  return (
    <article className="card-producto">
      <img src={img} alt="" />
      <h1>{nombre}</h1>
      {items.length > 0 && (
        <ul>
          {items.map((it) => {
            it.nombre;
          })}
        </ul>
      )}
      <button onClick={addItem}>
        <span>$ {precio} </span>
        <span>Pedir</span>
      </button>
    </article>
  );
}

export default CardItem;
