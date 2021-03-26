import "./App.css";
import GamePage from "./components/pages/GamePage.jsx";
import NavigationBar from "./components/shared/navbar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage.jsx";
import GamesList from "./components/pages/gamesList/GamesList.jsx";
import Rules from "./components/pages/officialRules/Rules.jsx";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/game/:id" exact component={GamePage} />
          <Route path="/official-rules" component={Rules}/>
          <Route path="/games" component={GamesList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
