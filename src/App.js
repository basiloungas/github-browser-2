import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Layout from './components/layout';
import Homepage from './pages/homepage';
import Users from './pages/users';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/users' component={Users} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
