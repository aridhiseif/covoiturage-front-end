import logo from "./logo.svg";
import { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import SuccSignInPage from "./pages/succSignInPage/SuccSignInPage";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const history = useHistory();

  return (
    <Router>
      <div className="GlobalContainer">
        <Header />
        <div className="bodyContainer">
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/signin_is_succesfull" component={SuccSignInPage} />
          <Route path="/home" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
