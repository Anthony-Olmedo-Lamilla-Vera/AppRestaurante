import axios from "axios";
import React, { useState } from "react";
import Modal from "../../../Components/Modal";
import { Rutas } from "../../../Rutas";
import InputForm, { typesForm } from "./Components/InputForm";
import useInputHooks from "./Hooks/useInputHooks";
import moment from "moment";
import TablaReserva from "./Components/TablaReserva";
import { useNavigate, useSearchParams } from "react-router-dom";

function IndexReserva() {
  const [Info, setInfo] = useState({ nombre: "", fechaNac: "" });
  const [Encontrado, setEncontrado] = useState("Verifique");
  const Cedula = useInputHooks(0);
  const FechaNacimiento = useInputHooks(Info.fechaNac);
  const Nombre = useInputHooks(Info.nombre);
  const FechaReserva = useInputHooks();
  const NumeroPersonas = useInputHooks();
  const NumeroMesasDisponibles = useInputHooks();
  const PrecioReserva = useInputHooks(15);
  const navigate = useNavigate();
  const InputSearch = useInputHooks();

  async function GetUserId(e) {
    e.preventDefault();
    await axios
      .get(Rutas.CLIENTE_ID + Cedula.Value)
      .then((data) => {
        if (data.data.data) {
          setInfo({
            nombre: data.data.data.Nombre,
            fechaNac: data.data.data.Fecha_Nacimiento,
          });
          Nombre.setValue(data.data.data.Nombre);
          FechaNacimiento.setValue(
            moment(data.data.data.Fecha_Nacimiento).format("YYYY-MM-DD")
          );
        } else {
          Nombre.setValue("");
          FechaNacimiento.setValue("");
        }
        setEncontrado(data.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function openMOdal() {
    console.log("open");
    const modal = document.querySelector(".modal-pedido");
    modal.classList.toggle("open-modal");
  }

  async function CrearReserva(e) {
    e.preventDefault();
    await axios
      .post(Rutas.NEW_RESERVA, {
        Id_Cliente: Cedula.Value,
        Nombre: Nombre.Value,
        Fecha_Nacimiento: FechaNacimiento.Value,
        Num_Mesa: NumeroMesasDisponibles.Value,
        Hora_Inicio: FechaReserva.Value,
        Num_Personas: NumeroPersonas.Value,
        Precio: PrecioReserva.Value,
      })
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => console.log(err.response));
  }
  function SearchKeyword(e) {
    e.preventDefault();
    navigate("/admin/reserva/?c=" + InputSearch.Value);
  }

  return (
    <main className="cont-main-root">
      <h1>Reservas</h1>
      <div className="search-reservas">
        <form onSubmit={SearchKeyword}>
          <label htmlFor="">Buscar Reserva </label>
          <input
            value={InputSearch.Value}
            onChange={InputSearch.ChangeValue}
            type="text"
            placeholder="Digite numero de cedula ..."
          />
        </form>
      </div>
      <button onClick={openMOdal}>Crear Reserva</button>
      <div className="table-reservas">
        <TablaReserva />
      </div>
      <Modal isButton={false} Title={"Reservas"} button={"Confirmar Reserva"}>
        <form action="" className="form-reserva">
          <InputForm
            Values={Cedula.Value}
            SetValue={Cedula.ChangeValue}
            typeInput={"Number"}
            type={typesForm.input}
            titulo={"N° Cedula"}
            comprobar={true}
            Cedula={Cedula.Value}
          >
            <p>{Encontrado}</p>
            <button onClick={GetUserId}>Comprobar</button>
          </InputForm>
          <InputForm
            Values={FechaNacimiento.Value}
            SetValue={FechaNacimiento.ChangeValue}
            typeInput={"date"}
            type={typesForm.input}
            titulo={"Fecha de Nacimiento"}
          />
          <InputForm
            typeInput={"text"}
            type={typesForm.input}
            Values={Nombre.Value}
            SetValue={Nombre.ChangeValue}
            titulo={"Nombre"}
          />

          <InputForm
            Values={FechaReserva.Value}
            SetValue={FechaReserva.ChangeValue}
            typeInput={"date"}
            type={typesForm.input}
            titulo={"Fecha de Reserva"}
          />
          <InputForm
            type={typesForm.select}
            Values={NumeroPersonas.Value}
            SetValue={NumeroPersonas.ChangeValue}
            titulo={"N° Personas"}
          />
          <InputForm
            type={typesForm.select}
            Values={NumeroMesasDisponibles.Value}
            SetValue={NumeroMesasDisponibles.ChangeValue}
            titulo={"N° Mesa Disponible"}
          />
          <InputForm
            type={typesForm.input}
            Values={PrecioReserva.Value}
            SetValue={PrecioReserva.ChangeValue}
            titulo={"Precio Reserva"}
          />

          <div className="confirm-pedido">
            <button type="submit" onClick={CrearReserva}>
              Crear Reserva
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default IndexReserva;
