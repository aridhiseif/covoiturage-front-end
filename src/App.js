import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Redirect,
  withRouter,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./components/login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import SuccSignInPage from "./pages/succSignInPage/SuccSignInPage";
import Home from "./pages/Home/Home";
import PrivateRoute from "./Utils/PrivateRoute";
import { useJwt } from "react-jwt";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const history = useHistory();
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));

  const deleteJwt = () => {
    if (isExpired) {
      localStorage.clear();
      return <></>;
    } else {
      return <></>;
    }
  };
  deleteJwt();

  const redirectToHome = () => {
    if (isLoggedIn) {
      history.push("/home");
    } else {
      return <Login />;
    }
  };

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
          <PrivateRoute path="/home" component={<Home />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
