import React, { useContext } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ProfilePage from "./containers/ProfilePage";
import PasswordReset from "./containers/PasswordReset";
import Home from './containers/Home';

import { UserContext } from "./UserProvider";
function App() {
  const user = useContext(UserContext);
  return (
    <Router>
      <Switch>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/passwordReset">
          <PasswordReset />
        </Route>
        <Route path="/profile">
          {user ? <ProfilePage /> : <SignIn />}
        </Route>
        <Route path="/home">
          {user ? <Home /> : <SignIn />}
        </Route>
        <Route path="/">
          {<SignIn />}
        </Route>
      </Switch>
    </Router>

  );
}
export default App;
