import "./FormularioProducto.css";
import { useState } from "react";

function FormularioProducto() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const agregarProducto = async (e) => {
    e.preventDefault();
    const producto = {
      nombre,
      precio,
    };
    console.log(producto);

    try {
      const res = await fetch(
        "https://backend-xtcl.onrender.com/api/productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        },
      );

      if (!res.ok) {
        throw new Error("Error al crear el producto");
      }

      const data = await res.json();
      console.log(data);
      
      setNombre("");
      setPrecio("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="formulario-container">
        <h2>Agregar Producto</h2>
        <form className="formulario" onSubmit={agregarProducto}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <button type="submit">Agregar Producto</button>
        </form>
      </div>
    </>
  );
}

export default FormularioProducto;
