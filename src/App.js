import "./App.css";
import Map from "./components/map/Map.jsx";
import NavigationBar from "./components/shared/navbar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage.jsx";
import GamesList from "./components/pages/gamesList/GamesList.jsx"

function App() {
  return (
    <html>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/game" exact>
            <Map />
          </Route>
          <Route path="/games" exact>
            <GamesList />
          </Route>
        </Switch>
      </Router>
    </html>
  );
}

export default App;
