import React from "react";
import moment from "moment";

import { Link, Outlet, useNavigate } from "react-router-dom";
function IndexAdmin() {
  return (
    <main className="main-reservas cont-main-root">
      <nav>
        <Link to={"reserva"}>
          <button>Reservas</button>
        </Link>
        <Link to={"pedido"}>
          <button>Pedidos</button>
        </Link>
        <Link to={"cliente"}>
          <button>Clientes</button>
        </Link>
        <span className="translate">{moment(Date.now()).format("LLLL")}</span>
      </nav>
      <Outlet />
    </main>
  );
}

export default IndexAdmin;
