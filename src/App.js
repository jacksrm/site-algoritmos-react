import { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import Routes from './Routes';


import './global.css';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  function getPage(pageName) {
    setCurrentPage(pageName);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar currentPage={currentPage} />
        <Routes getPage={getPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
