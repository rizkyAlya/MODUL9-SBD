import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './login';
import signUp from './signUp';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signUp} />
      </Switch>
    </Router>
  );
};

export default App;
