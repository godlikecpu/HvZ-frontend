import "./App.css";
import Map from "./components/map/Map.jsx";
import NavigationBar from "./components/shared/navbar/NavigationBar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage.jsx";

function App() {
  return (
    <html>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/game">
            <Map />
          </Route>
        </Switch>
      </Router>
    </html>
  );
}

export default App;
