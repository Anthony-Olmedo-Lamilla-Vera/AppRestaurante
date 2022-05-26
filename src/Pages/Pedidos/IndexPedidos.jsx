import React, { useState } from "react";
import { Rutas } from "../../Rutas";
import FormProduct from "./Component/FormProduct";
import { useNavigate } from "react-router-dom";
import TABLA_PEDIDOS from "./Component/TABLA_PEDIDOS";

function IndexPedido() {
  const [FormProduc, setFormProduc] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="cont-main-root">
      <h1>Pedidos Pendientes</h1>
      <nav>
        <span>Total Pedidos : 17</span>
        <button
          onClick={() =>
            FormProduc ? setFormProduc(false) : setFormProduc(true)
          }
        >
          {!FormProduc ? "Crear Producto" : "Cerrar"}
        </button>
      </nav>
      {FormProduc && <FormProduct />}

      <TABLA_PEDIDOS />
    </main>
  );
}

export default IndexPedido;
