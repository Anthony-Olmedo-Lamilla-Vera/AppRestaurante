import axios from "axios";
import React, { useState } from "react";
import { Rutas } from "../../../Rutas";
import InputForm, { typesForm } from "../../Admin/Routes/Components/InputForm";
import useInputHooks from "../../Admin/Routes/Hooks/useInputHooks";

function FormProduct() {
  const [TypoProduc, setTypoProduc] = useState("Individual");
  const [Items, setItems] = useState([]);
  const NombreItem = useInputHooks();
  const URLimg = useInputHooks();
  const Precio = useInputHooks();
  const NombreProducto = useInputHooks();
  console.log(JSON.stringify(Items));

  async function CrearProduct(e) {
    e.preventDefault();

    await axios
      .post(Rutas.NEW_PRODUCT, {
        Nombre: NombreProducto.Value,
        Precio: Precio.Value,
        Tipo: TypoProduc.Value,
        URL: URLimg.Value,
        Detalle: Items,
      })
      .then((DATA) => window.location.reload())
      .catch((ERR) => console.log(ERR.response));
  }
  function AñadirItem(e) {
    e.preventDefault();

    setItems([...Items, { nombre: NombreItem.Value }]);
    console.log(Items);
    NombreItem.setValue("");
  }
  console.log(TypoProduc);
  console.log(Precio);
  return (
    <React.Fragment>
      <div className="cont-form-product">
        <h3>Crear Product</h3>
        <div className="grid-col">
          <form onSubmit={CrearProduct} className="cont-form form-reserva">
            <InputForm
              Values={NombreProducto.Value}
              titulo={"Nombre Producto"}
              typeInput={"text"}
              type={typesForm.input}
              SetValue={NombreProducto.ChangeValue}
            />

            <InputForm
              Values={URLimg.Value}
              titulo={"Url Img Producto"}
              typeInput={"text"}
              type={typesForm.input}
              SetValue={URLimg.ChangeValue}
            />

            <InputForm
              Values={Precio.Value}
              SetValue={Precio.ChangeValue}
              titulo={"Precio Producto"}
              typeInput={"Number"}
              type={typesForm.input}
            />
            <div className="input-form">
              <label htmlFor="">Tipo</label>
              <select
                onChange={(e) => setTypoProduc(e.target.value)}
                defaultValue={1}
                placeholder="Complete el campo porfavor ..."
              >
                <option value={"Individual"}>Individual</option>
                <option value={"Combo"}>Combo</option>
              </select>
            </div>
            {TypoProduc === "Combo" && (
              <>
                <form action="">
                  <InputForm
                    titulo={"Items Producto"}
                    typeInput={"text"}
                    Values={NombreItem.Value}
                    SetValue={NombreItem.ChangeValue}
                    type={typesForm.input}
                  />
                  <button onClick={(e) => AñadirItem(e)}>Añadir Item</button>
                </form>
              </>
            )}

            <div className="confirm-pedido">
              <button type="submit">Crear Producto</button>
            </div>
          </form>
          {TypoProduc === "Combo" && (
            <div className="div-cont-productos-agg">
              <h2>Listado de Productos</h2>
              <div className="panel-products">
                {Items.map((item, index) => {
                  return (
                    <div key={index} className="item-panel-products">
                      <span>Item : # {index + 1}</span>
                      <span>Nombre : {item.nombre}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormProduct;
