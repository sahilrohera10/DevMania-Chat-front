import React from "react";
import Banner from "../../Components/LandingCompo/Banner";
import Connect from "../../Components/LandingCompo/Connect.jsx";
import GetStart from "../../Components/LandingCompo/GetStart";
import Strength from "../../Components/LandingCompo/Strength";
import Working from "../../Components/LandingCompo/Working";
import Navbar from "../../Components/NavBar/Navbar";
import Users from "../../Components/AllUsers/Users";

export default function Mainpage() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0B041B",
          width: "100vw",
          height: "100vh",
          backgroundImage: "radial-gradient( rgb(29 1 44), rgb(6 0 19))",
        }}
      >
        <Navbar />
        <Banner />
      </div>
      <div
        style={{
          backgroundColor: "#0B041B",
          width: "100vw",
          height: "100vh",
          backgroundImage: "radial-gradient( rgb(29 1 44), rgb(6 0 19))",
        }}
      >
        <Users />
      </div>

      <div style={{ backgroundColor: "#090017" }}>
        <Connect />
      </div>
      <div
        style={{
          backgroundColor: "#090017",
          // backgroundImage: "radial-gradient( rgb(29 1 44), rgb(6 0 19))",s
        }}
      >
        <Working />
      </div>
      <div
        style={{
          backgroundColor: "#090017",
          backgroundImage: "radial-gradient( rgb(29 1 44), rgb(6 0 19))",
        }}
      >
        {/* <Strength /> */}
      </div>
      <div
        style={{
          backgroundColor: "#090017",
          // backgroundImage: "radial-gradient( rgb(29 1 44), rgb(6 0 19))",
        }}
      >
        <GetStart />
      </div>
    </>
  );
}
