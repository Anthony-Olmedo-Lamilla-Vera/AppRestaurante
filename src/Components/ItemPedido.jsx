import React from "react";

function ItemPedido() {
  return (
    <article className="item-pedido">
      <div className="img-pedido">
        <img
          src="https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
          alt=""
        />
      </div>
      <div className="text-pedido">
        <h1>Lorem ipsum</h1>

        <ul>
          <li>ñsñasd</li>
          <li>ñsñasd</li>
          <li>ñsñasd</li>
        </ul>
        <p>$ 15</p>
        <select defaultValue={"1"}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </article>
  );
}

export default ItemPedido;
