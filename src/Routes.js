import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Somador from './components/Somador';
import Fibonacci from './components/Fibonacci';
import MDC from './components/MDC';
import Contador from './components/Contador';
import Primo from './components/Primo';
import Ordenar from './components/Ordenar';

export default function Routes(props) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(linkProps) => <Home {...linkProps} getPage={props.getPage} />}
      />
      <Route
        path="/somador"
        render={(linkProps) => <Somador {...linkProps} getPage={props.getPage} />}
      />
      <Route
        path="/fibonacci"
        render={(linkProps) => <Fibonacci {...linkProps} getPage={props.getPage} />}
      />
      <Route
        path="/mdc"
        render={(linkProps) => <MDC {...linkProps} getPage={props.getPage} />}
      />
      <Route
        path="/contador"
        render={(linkProps) => <Contador {...linkProps} getPage={props.getPage} />}
      />
      <Route
        path="/primo"
        render={(linkProps) => <Primo {...linkProps} getPage={props.getPage} />}
      />
      <Route
        path="/ordenar"
        render={(linkProps) => <Ordenar {...linkProps} getPage={props.getPage} />}
      />
    </Switch>
  );
}
