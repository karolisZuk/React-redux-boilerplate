import React from 'react';

class Login extends React.Component {
  render() {
      return (
      <div className="container col-md-6">
      <div className="jumbotron">
          <form>
          <h3 id="registerText">Login</h3>
            <div className="form-group">
                <label className="control-label"> Name / Email </label>
                    <input type="text"
                    className="form-control"
                    placeholder="name"
                    name="username" /><br />
                <label> Password </label>
                    <input type="password"
                    className="form-control"
                    placeholder="password"/><br />
                <div className="form-group">
            <input type="button" className="button btn btn-primary btn-lg" value="Login" />
              </div>
            </div>
          </form>
    </div>
      </div>
    );
  }
}
export default Login;
