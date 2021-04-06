import GamePage from "./components/pages/GamePage.jsx";
import NavigationBar from "./components/shared/navbar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage.jsx";
import GamesList from "./components/pages/gamesList/GamesList.jsx";
import Rules from "./components/pages/officialRules/Rules.jsx";
import LoginPage from "./components/pages/loginPage/LoginPage.jsx";
import RegisterNewUser from "./components/pages/regersterNewUser/registerNewUser.jsx";

import "./App.css";

function App() {

  function requireAuth(destination) {
    if (localStorage.getItem("token") === null) {
      return <LoginPage />
    } else {
      return destination
    }
  }

  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/game/:id" component={GamePage}>
            {requireAuth(<GamePage />)}
          </Route>
          <Route path="/official-rules" component={Rules} />
          <Route path="/games" component={GamesList} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterNewUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
