import React from 'react';
var NavLink = require('react-router-dom').NavLink;

export default () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className= "container-fluid">
        <div className="navbar-header">
          <div id="Logo">
            <NavLink to='/'>Viduramziai.lt</NavLink>
            </div>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item"><NavLink activeClassName='active' to='/naujienos'>
              Naujienos
            </NavLink></li>
            <li className="nav-item"><NavLink activeClassName='active' to='/kalendorius'>
              Kalendorius
            </NavLink></li>
            <li className="nav-item"><NavLink activeClassName='active' to='/informacija'>
              Informacija
            </NavLink></li>
            <li className="nav-item"><NavLink activeClassName='active' to='/zmones'>
              Zmones
            </NavLink></li>
            <li className="nav-item"><NavLink activeClassName='active' to='/failai'>
              Failai
            </NavLink></li>
            <li className="nav-item"><NavLink activeClassName='active' to='/statistika'>
              Statistika
            </NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
