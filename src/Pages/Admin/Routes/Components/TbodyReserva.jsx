import React from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { Fetcher, Rutas } from "../../../../Rutas";
import ItemTablePedido from "../../../Pedidos/Component/ItemTablePedido";

function TbodyReserva() {
  const location = useLocation();
  const item = new URLSearchParams(location.search);
  const keywordsearch = item.get("c") !== null ? item.get("c") : null;

  if (keywordsearch === "null") {
    useNavigate()("/admin/reservas");
  }
  const { data, error } = useSWR(
    Rutas.GET_RESERVA + "?cedula=" + keywordsearch,
    Fetcher
  );
  if (!data) {
    return (
      <tr>
        <td colSpan={6}>Cargando ...</td>
      </tr>
    );
  }
  if (data.msg) {
    return (
      <tr>
        <td colSpan={6}>No existe ...</td>
      </tr>
    );
  }
  if (error) {
    return (
      <tr>
        <td colSpan={6}>Error de Carga ...</td>
      </tr>
    );
  }

  return (
    <tbody>
      {data.Reservas.map((itemReserva, id) => {
        return (
          <ItemTablePedido
            key={id}
            Estado={itemReserva.Estado}
            Hora={itemReserva.Hora_Inicio}
            FechaExp={itemReserva.Hora_Inicio}
            numMesa={itemReserva.Num_Mesa}
            NumPersonas={itemReserva.Num_Personas}
            Precio={itemReserva.Precio}
            NombreCliente={itemReserva.ID_Cliente.Nombre}
          />
        );
      })}
    </tbody>
  );
}

export default TbodyReserva;
