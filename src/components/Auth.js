import React from "react";
import Loading from "./Loading";
import {onLogin, onRegistration} from '../utils/Http';
import {saveToken} from '../utils/StoreProvider';

export default class extends React.Component {
  state = {
    error: null,
    isLoading: false,
    email: "",
    password: ""
  };

  onEmailChange = e => {
    this.setState({ ...this.state, email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ ...this.state, password: e.target.value });
  };

  onLoginClicked = e => {
    e.preventDefault();
    this.setState({...this.state,isLoading:true});
    onLogin(this.state.email,this.state.password)
    .then(token => {
        console.log(token);
        saveToken(token.token);
        this.setState({...this.state,isLoading:false});
        this.props.authSuccess();
    }).catch(e => {
        console.log(e);
        this.setState({...this.state,error:'Login error',isLoading:false});
        
    })
  };

  onRegClicked = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="row justify-content-center">
            <form action="#" className="col-6 mt-5">
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Type email"
                value={this.state.email}
                onChange={e => this.onEmailChange(e)}
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Type password"
                value={this.state.password}
                onChange={e => this.onPasswordChange(e)}
              />
              <button
                className="btn btn-primary"
                onClick={e => this.onRegClicked(e)}
              >
                Registration
              </button>
              <button
                className="btn btn-success"
                onClick={e => this.onLoginClicked(e)}
              >
                Login
              </button>
              {/* <div className="alert alert-success mt-4" role="alert">
            Auth success
          </div> */}
              {this.state.error ? (
                <div className="alert alert-danger mt-4" role="alert">
                  {this.state.error}
                </div>
              ) : null}
            </form>
          </div>
        )}
      </>
    );
  }
}
