
import { useEffect } from 'react';

function Home({ getPage }) {

  useEffect(() => {
    getPage('home');
  });
  
  return (
    <div className="container no-space-around">
      <h1>Algoritmos - Projeto</h1>
      <p>
        Este é um site desenvolvido como trabalho da disciplina de
        Desenvolvimento de Software em Nuvem.
      </p>
      <h1>Dev. Team</h1>
      <ul>
        <li>Jacson Rodrigues</li>
        <li>Matheus Rodrigues</li>
        <li>Dante Dantas</li>
        <li>Rafael Tavares</li>
        <li>João Monteiro</li>
      </ul>
    </div>
  );
}

export default Home;
