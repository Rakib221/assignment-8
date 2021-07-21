import logo from './logo.svg';
import './App.css';
import SoccerLeagues from './Components/SoccerLeagues/SoccerLeagues';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './Components/Error/Error';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';
function App() {
  return (
    <div>
      <div>

      </div>
      <div>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/home">
                <SoccerLeagues></SoccerLeagues>
              </Route>
              <Route exact path="/">
                <SoccerLeagues></SoccerLeagues>
              </Route>
              <Route path="/league/:leagueId">
                <LeagueDetails></LeagueDetails>
              </Route>
              <Route path="*">
                <Error></Error>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
