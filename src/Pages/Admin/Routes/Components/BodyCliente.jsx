import React from "react";
import useSWR from "swr";
import ItemTableReserva from "../../../../Components/ItemTableReserva";
import Modal from "../../../../Components/Modal";
import { Fetcher, Rutas } from "../../../../Rutas";

function BodyCliente() {
  const { data, error } = useSWR(Rutas.GET_CLIENTES, Fetcher);

  if (!data) {
    return (
      <tr>
        <td colSpan={4}>Cargando ...</td>
      </tr>
    );
  }
  if (error) {
    return (
      <tr>
        <td colSpan={4}>Cargando ...</td>
      </tr>
    );
  }
  console.log(data);
  return (
    <React.Fragment>
      {data.data.map((itemCliente) => {
        return (
          <ItemTableReserva
            FechaNacimiento={itemCliente.Fecha_Nacimiento}
            Cedula={itemCliente.Cedula}
            Nombre={itemCliente.Nombre}
          />
        );
      })}
    </React.Fragment>
  );
}

export default BodyCliente;
