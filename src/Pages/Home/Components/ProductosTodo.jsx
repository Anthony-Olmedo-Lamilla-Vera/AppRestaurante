import React from "react";
import useSWR from "swr";
import CardItem from "../../../Components/CardItem";
import { Fetcher, Rutas } from "../../../Rutas";

function ProductosTodo() {
  const { data, error } = useSWR(Rutas.GET_PRODUCT, Fetcher);
  if (!data) {
    return <p>Cargando ... </p>;
  }
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <section className="catalogo-productos">
      {data.data.map((item, key) => {
        return (
          <CardItem
            items={item.Detalle}
            img={item.ImgProduct}
            key={key}
            nombre={item.Nombre}
            id={item._id}
            precio={item.Precio}
            cantidad={1}
          />
        );
      })}
    </section>
  );
}
export default ProductosTodo;
