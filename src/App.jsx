import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexHome from "./Pages/Home/indesHome";
import IndexPedido from "./Pages/Pedidos/IndexPedidos";
import IndexAdmin from "./Pages/Admin/IndexAdmin";
import IndexReserva from "./Pages/Admin/Routes/IndexReserva";
import IndexCliente from "./Pages/Admin/Routes/IndexCliente";
import { Provider } from "react-redux";
import { StorePedidos } from "./Redux/ConfigStore";
import Inicio from "./Pages/Home/Inicio";
function App() {
  return (
    <Provider store={StorePedidos}>
      <div className="contain-main">
        <header>
          <img
            src="https://res.cloudinary.com/dvrsowzhf/image/upload/v1654564020/Logotipo_Restaurante_Crema-removebg-preview_miyt75.png"
            alt=""
          />
        </header>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Inicio />} />
            <Route path="/user/:id/mesa/:mesa" element={<IndexHome />} />
            <Route path="/admin/*" element={<IndexAdmin />}>
              <Route path="reserva/" element={<IndexReserva />} />
              <Route path="pedido" element={<IndexPedido />} />
              <Route path="cliente" element={<IndexCliente />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
