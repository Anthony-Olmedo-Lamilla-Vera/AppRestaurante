import React from "react";

function CardItem() {
  return (
    <article className="card-producto">
      <img
        src="https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
        alt=""
      />
      <h1>Lorem ipsum</h1>
      <ul>
        <li>ñsñasd</li>
        <li>ñsñasd</li>
        <li>ñsñasd</li>
        <li>ñsñasd</li>
        <li>ñsñasd</li>
        <li>ñsñasd</li>
      </ul>
      <button>
        <span>$15 </span>
        <span>Pedir</span>
      </button>
    </article>
  );
}

export default CardItem;
