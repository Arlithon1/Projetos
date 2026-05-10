import './Favoritos.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    if (minhaLista) {
      setFilmes(JSON.parse(minhaLista)  || []);
    }
  }, []);

  function excluirFilme(id) {
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    filmesSalvos = filmesSalvos.filter((filme) => filme.id !== id);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    setFilmes(filmesSalvos);
    toast.success("Filme excluído com sucesso!");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>
        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link to={`/Movie/${filme.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;