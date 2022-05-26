import React from "react";
import { useNavigate } from "react-router-dom";
import useInputHooks from "../Admin/Routes/Hooks/useInputHooks";

function Inicio() {
  const navigate = useNavigate();
  const InputSearch = useInputHooks();
  function SearchKeyword(e) {
    e.preventDefault();
    console.log("hgol");
    navigate(`/user/${InputSearch.Value}/mesa/5`);
  }
  return (
    <div className="search-reservas">
      <h1>Bienvenido </h1>
      <form onSubmit={SearchKeyword}>
        <label htmlFor="">Ingrese una Cedula de Usuario</label>
        <input
          value={InputSearch.Value}
          onChange={InputSearch.ChangeValue}
          type="number"
          placeholder="Digite numero de cedula ..."
        />
      </form>
    </div>
  );
}

export default Inicio;
