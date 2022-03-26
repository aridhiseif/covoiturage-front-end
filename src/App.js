import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Login from "./components/login/Login";
import "./App.css";

function App() {
  return (
    <div className="GlobalContainer">
      <Header />
      <div className="bodyContainer">
        <Login />
      </div>
    </div>
  );
}

export default App;
