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

function App() {
  const user = null;
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
          <ProfilePage />
        </Route>
        <Route path="/">
          {<SignIn />}
        </Route>
      </Switch>

    </Router>

  );
}
export default App;
