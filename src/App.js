import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import InProgress from './pages/InProgress';
import Profile from './pages/Profile';
import Done from './pages/Done';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <Switch>
        <Route exact path="/" component={ Login } />

        <Route exact path="/meals" component={ Recipes } />
        <Route exact path="/drinks" component={ Recipes } />

        <Route exact path="/meals/:recipeId" component={ Recipe } />
        <Route exact path="/drinks/:recipeId" component={ Recipe } />

        <Route exact path="/meals/:recipeId/in-progress" component={ InProgress } />
        <Route exact path="/drinks/:recipeId/in-progress" component={ InProgress } />

        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ Done } />
        <Route exact path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </div>
  );
}

export default App;