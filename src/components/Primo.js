import { useEffect, useState } from 'react';
import Resultado from './Resultado';
import api from '../services/api';

function Primo({ getPage }) {
  const [ent, setEnt] = useState('');
  const [lastEnt, setLastEnt] = useState(null);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    getPage('primo');
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const entrada = parseInt(ent);

    try {
      const { resultado } = (await api.post('primo', { entrada })).data;

      setResult(resultado);
      setShowResult(true);
      setEnt('');
      setLastEnt(entrada);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1>Será que é primo?</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <p>
          Inserir o número o qual deseja verificar em sua existência se é
          pertencente à categoria de números primos.
        </p>
        <input
          className="input-sml"
          value={ent}
          onChange={(e) => setEnt(e.target.value)}
          type="number"
          required
          autoFocus
          pattern="^[\d]+$"
          placeholder="Ex: 15"
        />
        <button type="submit">Averiguar</button>
      </form>

      <Resultado disabled={!showResult}>
        <p>
          Número {lastEnt} {result}
        </p>
      </Resultado>
    </div>
  );
}

export default Primo;
