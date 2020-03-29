import React from "react";
import { NavLink, Route } from "react-router-dom";
import Loading from "./Loading";
import ContactView from './ContactView';
import {getToken} from '../utils/StoreProvider';
import {getAllContacts} from '../utils/Http';

export default class extends React.Component {
  state = {
    contacts: [],
    isLoading: true
  };

  componentDidMount(){
      let token = getToken();
      getAllContacts(token)
      .then(contacts => {
        this.setState({contacts:contacts.contacts,isLoading:false});
      });
  }
  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="row mt-5">
            <div className="col-6">
              <div className="list-group">
                {this.state.contacts.map(c => {
                  return (
                    <NavLink
                      key={c.id}
                      to={`/contacts/${c.id}`}
                      className="list-group-item list-group-item-action"
                    >
                      {`${c.name} ${c.lastName}`}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="col-6">
              <Route
                path="/contacts/:id"
                component={ContactView}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
