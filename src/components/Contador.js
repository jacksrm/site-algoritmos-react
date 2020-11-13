import { useEffect, useState } from 'react';
import Resultado from './Resultado';
import api from '../services/api';

function Contador({ getPage }) {
  const [num, setNum] = useState('');
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    getPage('contador');
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const numero = parseInt(num);

    try {
      const { resultado } = (await api.post('contador', { numero })).data;

      setResult(resultado);
      setShowResult(true);
      setNum('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1>Contar números</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <p>Insira um número</p>
        <input
          className="input-sml"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          type="number"
          required
          autoFocus
          pattern="^[\d]+$"
          placeholder="Ex: 15"
        />
        <button type="submit">Contar</button>
      </form>

      <Resultado disabled={!showResult}>
        <p>Quantidade de números entre 1 e {result} é {result}</p>
      </Resultado>
    </div>
  );
}

export default Contador;
