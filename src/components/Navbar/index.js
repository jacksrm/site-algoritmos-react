import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Navbar(props) {
  const { currentPage } = props;

  const navLinkRefs = useRef([]);

  useEffect(() => {
    const refs = navLinkRefs.current.map((el) => el.id);

    refs.map((el, ind) => {
      if (currentPage === el) navLinkRefs.current[ind].className = 'selected';
      else navLinkRefs.current[ind].className = '';

      return null;
    });
  }, [currentPage]);

  return (
    <>
      <header className="nav-bar">
        <ul>
          <li>
            <Link
              ref={(ref) => (navLinkRefs.current[0] = ref)}
              id="home"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              ref={(ref) => (navLinkRefs.current[1] = ref)}
              id="somador"
              to="/somador"
            >
              Somador
            </Link>
          </li>
          <li>
            <Link
              ref={(ref) => (navLinkRefs.current[2] = ref)}
              id="fibonacci"
              to="/fibonacci"
            >
              Fibonacci
            </Link>
          </li>
          <li>
            <Link
              ref={(ref) => (navLinkRefs.current[3] = ref)}
              id="mdc"
              to="/mdc"
            >
              MDC
            </Link>
          </li>
          <li>
            <Link
              ref={(ref) => (navLinkRefs.current[4] = ref)}
              id="ordenar"
              to="/ordenar"
            >
              Ordenação
            </Link>
          </li>
          <li>
            <Link
              ref={(ref) => (navLinkRefs.current[5] = ref)}
              id="contador"
              to="/contador"
            >
              Contagem
            </Link>
          </li>
          <li>
            <Link
              ref={(ref) => (navLinkRefs.current[6] = ref)}
              id="primo"
              to="/primo"
            >
              Número Primo
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
