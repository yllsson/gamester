import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamesterApp from '../components/GamesterApp';
import GameDetailsPage from '../components/GameDetailsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/details/:name' component={GameDetailsPage} />
        <Route path='/' component={GamesterApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
