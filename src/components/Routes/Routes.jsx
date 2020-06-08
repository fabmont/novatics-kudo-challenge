import React from 'react';
import { Switch } from 'react-router-dom';
import { Box } from 'grommet';

import Route from './Route';
import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Stats from '../../pages/Stats';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={Login} />
      <Route exact path="/" component={Home} isPrivate />
      <Route path="/timeline" component={() => <div>Timeline</div>} isPrivate />
      <Route path="/my-kudos" component={Stats} isPrivate />
      <Route
        path="*"
        component={() => (
          <Box fill align="center" justify="center">
            404
          </Box>
        )}
      />
    </Switch>
  );
}
