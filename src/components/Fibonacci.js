import { useEffect, useState } from 'react';
import Resultado from './Resultado';
import api from '../services/api';

function Fibonacci({ getPage }) {
  const [qtd, setQtd] = useState('');
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    getPage('fibonacci');
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const quantidade = parseInt(qtd);

    try {
      const { resultado } = (await api.post('fibonacci', { quantidade })).data;

      setResult(resultado);
      setShowResult(true);
      setQtd('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1>Fibonacci</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <p>Digite a quantidade de números da sequência:</p>
        <input
          className="input-sml"
          value={qtd}
          onChange={(e) => setQtd(e.target.value)}
          type="number"
          required
          autoFocus
          pattern="^[\d]+$"
          placeholder="Ex: 15"
        />
        <button type="submit">Ver sequência</button>
      </form>

      <Resultado disabled={!showResult}>
        <p>Sequencia de Fibonacci:</p>
        <p>{result}</p>
      </Resultado>
    </div>
  );
}

export default Fibonacci;
