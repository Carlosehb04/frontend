// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/header/Header.jsx";
import "./App.css";
import Listaproductos from "./componentes/Listaproductos/ListaProductos.jsx";
import FormularioProducto from "./componentes/FormularioProducto/FormularioProducto.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Listaproductos />} />
          <Route path="/agregar" element={<FormularioProducto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
