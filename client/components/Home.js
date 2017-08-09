import React from 'react';
import Greetings from './Greetings';
import Login from './Login';
import Register from './Register';

class Home extends React.Component {
  render() {
      return (
        <div className="container">
          <Greetings />
                  <Login />
                  <Register />
        </div>
      );
  }
}

export default Home;
