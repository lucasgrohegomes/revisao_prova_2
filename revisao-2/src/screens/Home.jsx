import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/busca-cep">Pesquisar um CEP</Link></li>
          <li><Link to="/buscar-cachorro">Fotos de Cachorro</Link></li>
        </ul>
      </nav>
    </header>
  );
}
