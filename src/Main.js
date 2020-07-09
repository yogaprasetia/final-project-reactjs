import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import  App from "./App";
import  Posting from "./Posting";
import  Visitor from "./Visitor";
import Contrib from "./Contrib";



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Sanbercode Blog</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/posting">Posting</NavLink></li>
            <li><NavLink to="/visitor">Visitor</NavLink></li>
            <li><NavLink to="/contributor">Contributor</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={App}/>
            <Route exact path="/posting" component={Posting}/>
            <Route exact path="/visitor" component={Visitor}/>
            <Route exact path="/contributor" component={Contrib}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;