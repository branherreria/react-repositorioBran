import React from 'react';

import { PaginaListas } from './components/PaginaListas';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Perfil } from './components/Perfil';
import { MenuItems } from './data/MenuItems';
import Header from './components/Header';

export function App() {
  return (
    <Router>
      <Header />
      {/*createRoutes()*/}
      {MenuItems.map(function createRoute(item) {
        return <Route path={item.path} exact component={item.component} />;
      })}
    </Router>
  );
}
