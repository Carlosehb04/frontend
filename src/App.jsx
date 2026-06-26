// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/header/Header.jsx";
import "./App.css";
import Listaproductos from "./componentes/Listaproductos/ListaProductos.jsx";
import FormularioProducto from "./componentes/FormularioProducto/FormularioProducto.jsx";
import Footer from "./componentes/footer/Footer.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="contenido">
            <Routes>
              <Route path="/" element={<Listaproductos />} />
              <Route path="/agregar" element={<FormularioProducto />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
