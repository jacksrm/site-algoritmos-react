import { useEffect, useState } from 'react';

function Somador({ getPage }) {
  const [array, setArray] = useState('');

  useEffect(() => {
    getPage('somador');
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Somar um array</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <p>Insira os números separados por vírgula</p>
        <input
          value={array}
          onChange={ e => setArray(e.target.value)}
          type="text"
          name="array"
          required
          autoFocus
          pattern="^[\d,.]+$"
          placeholder="Ex: 1,2,3,4,5"
        />
        <button type="submit">Somar</button>
      </form>
    </div>
  );
}

export default Somador;
