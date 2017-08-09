import React from 'react';

class Register extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      username:'',
      email:'',
      password:'',
      passwordConfirmation:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
      return (
      <div className="container col-md-6">
          <div className="jumbotron">
              <form onSubmit={this.onSubmit}>
              <h3 id="registerText">Register</h3>
                <div className="form-group">
                    <label className="control-label"> Name </label>
                        <input type="text"
                        className="form-control"
                        placeholder="name"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}/><br />
                  <label className="control-label"> Email </label>
                        <input type="text"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}/><br />
                  <label className="control-label"> Password </label>
                        <input type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}/><br />
                  <label className="control-label"> Repeat password </label>
                        <input type="password"
                        className="form-control"
                        placeholder="repeat password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}/><br />
                    <div className="form-group">
                <button className="button btn btn-primary btn-lg">
                    Sign up
                </button>
                  </div>
                </div>
              </form>
        </div>
      </div>
    );
  }
}
export default Register;
