import React from "react";
import Header from "./components/Header";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import {getToken} from "./utils/StoreProvider";
import Auth from "./components/Auth";
import Contacts from "./components/Contacts";

class App extends React.Component {
  state = {
    isAuth:false
  }

  componentDidMount(){
      this.setState({isAuth:getToken()!==null});
  }

  authSuccess = () => {
    this.setState({...this.state,isAuth:true});
    this.props.history.push('/contacts');
  }

  render() {
    return (
      <>
        <Header isAuth={this.state.isAuth} />
        <div className="container">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            {!this.state.isAuth ? <Route path='/login' render={()=> <Auth authSuccess={this.authSuccess}/>}/>:null}
            {this.state.isAuth ? <Route path='/contacts' component={Contacts}/> : <Redirect to='/login'/>}
            <Redirect to='/'/>
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
