import React from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { Fetcher, Rutas } from "../../../Rutas";
import ItemTable from "./ItemTable";

function ItemsPedidosBody({ data, setId }) {
  return (
    <tbody>
      {data.data.map((item) => {
        return (
          <ItemTable
            cliente={item.ID_Cliente.Nombre}
            setId={setId}
            productos={item.Productos}
            id={item._id}
            estado={item.Estado}
            cantidaditems={item.Cantidad}
            num_mesa={item.Mesa}
            hora_pedido={"2pm"}
            totalPedido={item.Total}
          />
        );
      })}
    </tbody>
  );
}

export default ItemsPedidosBody;
