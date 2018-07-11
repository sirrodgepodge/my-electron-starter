/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Counter from './Counter';

export default function Routes() {
  return (
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
