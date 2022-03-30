import React from "react";
import "./Home.css";
import SideBar from "./SideBar/SideBar";

function Home() {
  return (
    <div className="HomeContainer">
      <SideBar />
      <div className="HomeBody"></div>
      Home
    </div>
  );
}

export default Home;
