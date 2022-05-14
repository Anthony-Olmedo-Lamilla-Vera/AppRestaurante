import React from "react";
import CardItem from "../../Components/CardItem";
import Footer from "../../Components/Footer";

function IndexHome() {
  return (
    <React.Fragment>
      <h2>Bienvenidos </h2>

      <h3>Nº Mesa 15</h3>
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

      <section className="catalogo-productos">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default IndexHome;
