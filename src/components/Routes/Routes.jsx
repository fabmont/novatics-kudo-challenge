import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../../pages/Login';
import Home from '../../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={Login} />
      <Route exact path="/" component={Home} isPrivate />
    </Switch>
  );
}
