import React from "react";
import "./SuccSignInPage.css";
import { useHistory } from "react-router-dom";

function SuccSignInPage() {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };
  return (
    <div className="SuccPageContainer">
      <div className="cardContainer border-gradient border-gradient-green">
        <h2>success !!</h2>
        <p>votre compte est creér avec success</p>
        <button className="SuccessBtn" onClick={() => redirectToHome()}>
          Page d'Accuiel
        </button>
      </div>
    </div>
  );
}

export default SuccSignInPage;
