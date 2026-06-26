import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <nav>
        <h1>Productos</h1>

        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/agregar">Agregar Producto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

