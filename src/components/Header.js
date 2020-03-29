import React from "react";
import {Link, withRouter} from "react-router-dom";

const Header  = props => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-navbar">
      <span className="navbar-brand mb-0 h1">Phone Book</span>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className={props.location.pathname === '/' ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className={props.location.pathname === '/about' ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/about">
              About US
            </Link>
          </li>
          <li className={props.location.pathname === '/contacts' ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
        {
            props.isAuth ? 
            <>
              <button className="btn btn-success my-0 mr-3">Add</button> 
              <button className="btn btn-outline-danger my-0">Logout</button> 
            </>
            :
            <button 
            className="btn btn-outline-warning my-0"
            onClick={()=>props.history.push('/login')}
            >Sign in</button>
        }
      </div>
    </nav>
  );
};

export default withRouter(Header);
