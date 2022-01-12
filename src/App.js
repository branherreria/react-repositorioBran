import React from 'react';

import { PaginaListas } from './components/PaginaListas';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Home} from './components/Home';
import {Perfil} from './components/Perfil';
import {MenuItems} from './data/MenuItems';

export function App() {
  return (
    
    <Router>
      <nav>
        <h1>Mi aplicación</h1>


        <ul>
          {/* Forma 3: map (función flecha) */}
          {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>


      </nav>

      
        <Route path="/" exact component={Home} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/listas" component={PaginaListas} />
      </Router>
    
  );
}