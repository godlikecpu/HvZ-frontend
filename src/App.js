import "./App.css";
import GamePage from "./components/pages/GamePage.jsx";
import NavigationBar from "./components/shared/navbar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage.jsx";
import GamesList from "./components/pages/gamesList/GamesList.jsx";
import LoginPage from "./components/pages/loginPage/LoginPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} /> 
          <Route path="/home" exact>
            <NavigationBar></NavigationBar>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/game/:id" exact>
            <NavigationBar></NavigationBar>
            <GamePage></GamePage>
          </Route>
          <Route path="/games" exact>
            <NavigationBar></NavigationBar>
            <GamesList></GamesList>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
