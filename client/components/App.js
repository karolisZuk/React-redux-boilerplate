import React from 'react';
import NavigationBar from './NavigationBar';

import Home from './Home';
import Naujienos from './Naujienos';
import Kalendorius from './Kalendorius';
import Informacija from './Informacija';
import Zmones from './Zmones';
import Statistika from './Statistika';
import Failai from './Failai';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render(){
  return (
          <Router>
            <div className="container">
            <NavigationBar />
              <Route exact path='/' component={Home} />
              <Route exact path='/naujienos' component={Naujienos} />
              <Route exact path='/kalendorius' component={Kalendorius} />
              <Route exact path='/informacija' component={Informacija} />
              <Route exact path='/zmones' component={Zmones} />
              <Route exact path='/failai' component={Failai} />
              <Route exact path='/statistika' component={Statistika} />
            </div>
          </Router>
  );
  }
}

export default App;
