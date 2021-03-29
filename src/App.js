import "./App.css";
import GamePage from "./components/pages/GamePage.jsx";
import NavigationBar from "./components/shared/navbar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage.jsx";
import GamesList from "./components/pages/gamesList/GamesList.jsx";
import Rules from "./components/pages/officialRules/Rules.jsx";
import LoginPage from "./components/pages/loginPage/LoginPage.jsx";
import GameStatistics from "./components/game-statistics/GameStatistics";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" exact component={LandingPage} />
          <Route path="/game/:id" exact component={GamePage} />
          <Route path="/official-rules" component={Rules}/>
          <Route path="/games" component={GamesList} />
          {/* <Route path="/game/:id/game-statistics" exact component={GameStatistics} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
