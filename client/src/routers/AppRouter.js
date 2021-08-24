import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamesterDashboard from '../components/GamesterDashboard';
import GameDetailsPage from '../components/GameDetailsPage';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/details/:name' component={GameDetailsPage} />
        <Route path='/' component={GamesterDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
