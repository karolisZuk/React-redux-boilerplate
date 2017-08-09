import React from 'react';
import Greetings from './Greetings';

class Naujienos extends React.Component {
  render() {
      return (
        <div className="container">
          <h2>Naujienos</h2>
          <Greetings />
        </div>
      );
  }
}

export default Naujienos;
