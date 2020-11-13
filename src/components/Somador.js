import { useEffect, useState } from 'react';
import Resultado from './Resultado';
import api from '../services/api';

function Somador({ getPage }) {
  const [strArray, setStrArray] = useState('');
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    getPage('somador');
  });

  function stringToArray(string) {
    string = string.split(',').map((el) => {
      el = parseFloat(el);
      if (!el) el = 0;
      return el;
    });

    return string
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const array = stringToArray(strArray);

    try {
      const { resultado } = await (await api.post('somador', { array })).data;
      
      setResult(resultado);
      setShowResult(true);  
      setStrArray('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1>Somar um array</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <p>Insira os números separados por vírgula</p>
        <input
          value={strArray}
          onChange={(e) => setStrArray(e.target.value)}
          type="text"
          required
          autoFocus
          pattern="^[\d,.]+$"
          placeholder="Ex: 1,2,3,4,5"
        />
        <button type="submit">Somar</button>
      </form>

      <Resultado disabled={!showResult}>
        <p>Soma: {result}</p>
      </Resultado>
    </div>
  );
}

export default Somador;
