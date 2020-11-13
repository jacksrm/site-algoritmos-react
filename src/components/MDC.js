import { useEffect, useState } from 'react';
import Resultado from './Resultado';
import api from '../services/api';

function MDC({ getPage }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    getPage('mdc');
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const numero1 = parseInt(num1);
    const numero2 = parseInt(num2);

    try {
      const { resultado } = (await api.post('mdc', { numero1, numero2 })).data;

      setResult(resultado);
      setShowResult(true);
      setNum1('');
      setNum2('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1>Calcular MDC</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <p>Insira dois números</p>
        <div className="input-lado-a-lado">
          <input
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            autoFocus
            className="input-sml"
            type="number"
            min="1"
            required
            pattern="^[\d]+$"
            placeholder="Ex: 10"
          />
          <input
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="input-sml"
            type="number"
            min="1"
            required
            pattern="^[\d]+$"
            placeholder="Ex: 10"
          />
        </div>
        <button type="submit">Calcular</button>
      </form>

      <Resultado disabled={!showResult}>
        <p>MDC: {result}</p>
      </Resultado>
    </div>
  );
}

export default MDC;
