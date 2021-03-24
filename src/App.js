import "./App.css";
import NavigationBar from "./components/shared/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.jsx";
import GamePage from "./components/pages/GamePage.jsx";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/game">
            <GamePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
