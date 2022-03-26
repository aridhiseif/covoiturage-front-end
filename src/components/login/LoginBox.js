import React, { useState } from "react";
import validator from "validator";
import "./Login.css";

function LoginBox() {
  const [login, setLogin] = useState(true);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [Lemail, setLEmail] = useState("");
  const [role, setRole] = useState("client");
  const [password, setPassword] = useState("");
  const [redLine, setRedLine] = useState(false);

  const IsValidEmail = () => {
    if (validator.isEmail(email) || email == "") {
      return "Input";
    } else {
      return "WrongInput";
    }
  };

  const IsValidLEmail = () => {
    if (validator.isEmail(Lemail) || Lemail == "") {
      return "Input";
    } else {
      return "WrongInput";
    }
  };

  const addUser = async (credentials) => {
    return fetch("http://localhost:8001/api/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  const SginBtn = async (e) => {
    let body = {
      nom: nom,
      prenom: prenom,
      email: email,
      roles: role,
      password: password,
      isActive: false,
    };
    console.log(body);
    const user = await addUser(body);
    console.log(user);
  };

  return (
    <div className="LoginBoxContainer">
      {login ? (
        //-------------Login Box----------------------------------------------
        <div className="SgininBox">
          Email:
          <input
            type="email"
            className={IsValidLEmail()}
            value={Lemail}
            onChange={(e) => setLEmail(e.target.value)}
          />
          Password:
          <input type="password" className="Input" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btnSave">Login</button>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <p style={{ fontSize: 10, marginTop: 5, marginRight: 5 }}>
                Nouveau client?
              </p>
              <button className="SignInBtn" onClick={() => setLogin(false)}>
                Sign In
              </button>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <p style={{ fontSize: 10, marginTop: 5, marginRight: 5 }}>
                Mot de passe oublié?
              </p>
              <button className="SignInBtn">click here</button>
            </div>
          </div>
        </div>
      ) : (
        //---------------Sign in box---------------------------------------------------
        <div className="SgininBox">
          Nom:
          <input
            type="text"
            className="Input"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          Pénom:
          <input
            type="text"
            className="Input"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          Email:
          <input
            type="email"
            className={IsValidEmail()}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/**-----------Roles---------------------- */}
          Role:
          <select
            name="roles"
            id="roles"
            className="SelectStyle"
            value={role}
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          >
            <option value="client">client</option>
            <option value="conducteur">conducteur</option>
          </select>
          Password:
          <input
            type="password"
            className="Input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btnSave" onClick={() => SginBtn()}>
              Sign In
            </button>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <p style={{ fontSize: 10, marginTop: 5, marginRight: 5 }}>
                avez déjà un compte?
              </p>
              <button className="SignInBtn" onClick={() => setLogin(true)}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginBox;
