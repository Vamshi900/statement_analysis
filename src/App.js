import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/">
              Hello World!
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
