import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useAuth from '../contexts/auth';
import { SignInPage } from '../pages/signIn.page';
import { authentictedRoutes } from './athenticated.routes';

export const Routes: React.FC<{ contentWrapper: React.FC }> = (props) => {
  const { signed } = useAuth();
  return (
    <Router>
      {props.children}
      <props.contentWrapper>
        <Switch>
          { signed ? authentictedRoutes.map((route, index) => {
            return <Route path={route.path} exact={route.exact} children={<route.children />} />
          }) :
          <SignInPage />
          }
          <Route path='*' children={<div />} />
        </Switch>
      </props.contentWrapper>
    </Router>
  );
}
