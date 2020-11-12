import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Somador from './components/Somador';
import Home from './components/Home';


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
          <Switch>
            <Route exact path="/" render={ props => <Home {...props} getPage={getPage} />} />
            <Route path="/somador" render={ props => <Somador {...props} getPage={getPage} />} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
