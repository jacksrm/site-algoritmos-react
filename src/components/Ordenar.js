import { useEffect } from 'react';

export default function Ordenar({ getPage }) {
  useEffect(() => {
    getPage('ordenar');
  });

  return (
    <div className="container">
      
    </div>
  );
}
