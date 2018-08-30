import React , {Fragment}from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import './index.css';
import Navbar from './components/navbar'
import App from './components/App';
import Search from './components/search';
import Signin from './components/signin';
import Signup from './components/signup'

const root: ?Element = document.getElementById('root');

const Root = () => (
    <Router>
        <Fragment>
        <Navbar />
<Switch>
<Route path="/" exact component={App} />
        <Route path="/search" exact component={Search} />
        <Route path="/signin" component= {Signin} />
        <Route path="/signup" component={Signup}  />
    </Switch> 
        </Fragment>
    </Router>

)

if(root != null){
ReactDOM.render(
<Root />,root);
}