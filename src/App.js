import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/HomePage';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul className='ul'>
          <li className= 'li-style'>
            <Link to="/">Home</Link>
          </li>
          <li className= 'li-style'>
            <Link to="/deposit">Deposit</Link>
          </li>
          <li className= 'li-style'>
            <Link to="/withdraw">Withdraw</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/deposit" component={Deposit}>
        </Route>
        <Route path="/withdraw" component={Withdraw}>
        </Route>
        <Route path="/" component={HomePage}>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
