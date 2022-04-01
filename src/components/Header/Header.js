import React from "react";
import "./Header.css";
import { useHistory, useLocation } from "react-router-dom";

function Header() {
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="HeaderContainer">
      <div className="emptyDiv"></div>
      <div className="Logo">Covoiturage.tn</div>
      <div>
        {location.pathname == "/home" ? (
          <button className="decBtn" onClick={() => logout()}>
            déconnecté
          </button>
        ) : (
          <div className="emptyDiv"></div>
        )}
      </div>
    </div>
  );
}

export default Header;
