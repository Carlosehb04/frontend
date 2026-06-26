import "./ListaProductos.css";
import { useState, useEffect } from "react";

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");
  const viteUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const obtenerProcutos = async () => {
      try {
        const res = await fetch(viteUrl);

        if (!res.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await res.json();

        setProductos(data);
      } catch (error) {
        setError(error.message);
      }
    };
    obtenerProcutos();
  }, [viteUrl]);

  return (
    <>
      {error && <p className="error">{error}</p>}

      <div className="container">
        <h1>Listado de Productos</h1>
        {productos.map((producto) => {
          return (
            <div key={producto.id}>
              <h2>{producto.nombre}</h2>
              <p>{producto.precio}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListaProductos;
