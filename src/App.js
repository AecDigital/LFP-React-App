import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import UsersList from './views/usersList';
import UserDetails from './views/userDetails'
import Login from './views/login'

const userToken = JSON.parse(localStorage.getItem('userToken'));

const AuthenticatedUsersRoute = ({ component: Component, history }) => (
  <Route
  render={() => 
    !userToken ? ( <Redirect to='/login' /> ) : <Route exact path='/users' component={UsersList} />
  } /> )

  const AuthenticatedDetailsRoute = ({ component: Component, history }) => (
    <Route
    render={() => 
      !userToken ? ( <Redirect to='/login' /> ) : <Route exact path='/users/:id' component={UserDetails} />
    } /> )

const App = ({ store }, { history }) => (
  <Provider store={store}>
    <Router history>
      <div>
        <AppBar position="static">
          <Toolbar className={"App-header"}>
            <img alt="LFP logo" src={require("./utils/images/logolfp.ico")} />
          </Toolbar>
        </AppBar>
      </div>
        <div history={history}>
          <Route exact path='/' render={() => (<Redirect from='/' to='/login' />)} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/users' component={UsersList} /> */}
          {/* <Route exact path='/users/:id' component={UserDetails} />  */}
          <AuthenticatedUsersRoute path='users' component={UsersList} />
          <AuthenticatedDetailsRoute path='users' component={UserDetails} />

        </ div>
    </Router>
  </Provider>
);



App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;