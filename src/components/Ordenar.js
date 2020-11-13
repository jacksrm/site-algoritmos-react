import { useEffect } from 'react';

export default function Ordenar({ getPage }) {
  useEffect(() => {
    getPage('ordenar');
  });

  return (
    <div className="container">
      <h1>Ordenar com Quick Sort</h1>
    </div>
  );
}
