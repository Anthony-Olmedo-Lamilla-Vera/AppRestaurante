import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import CardItem from "../../Components/CardItem";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";
import { Fetcher, Rutas } from "../../Rutas";
import useInputHooks from "../Admin/Routes/Hooks/useInputHooks";
import ProductosTodo from "./Components/ProductosTodo";

function IndexHome() {
  const Params = useParams();
  const navigate = useNavigate();
  const InputSearch = useInputHooks();

  console.log(Params);
  const { data, error } = useSWR(Rutas.CLIENTE_ID + Params.id, Fetcher);
  if (!data) {
    return <Loading />;
  }
  function SearchKeyword(e) {
    e.preventDefault();

    navigate(`/user/${InputSearch.Value}/mesa/5`);
  }
  console.log(data);
  if (error) {
    return <p>Error ...</p>;
  }
  if (data.data === null) {
    return (
      <div className="div-noclient">
        <p className="Cliente-msg">No existe este Usuario</p>
        <div className="search-reservas">
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
      </div>
    );
  }
  return (
    <React.Fragment>
      <button className="btn-salir" onClick={() => navigate("/")}>
        Salir
      </button>
      <h2>Bienvenidos </h2>

      <p className="Cliente-msg">{data.data.Nombre}</p>
      <h3>Nº Mesa {Params.mesa}</h3>
      <div className="nav-filtros">
        <span>Filtrar por tipo</span>
        <ul>
          <li>Super Compbos</li>
          <li>Platos a la Carta</li>
          <li>Combos Economicos</li>
          <li>Gaseosas</li>
          <li>Licores</li>
        </ul>
      </div>
      <ProductosTodo />
      <Footer />
    </React.Fragment>
  );
}

export default IndexHome;
