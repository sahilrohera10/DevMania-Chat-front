import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import configData from "../../Config.json";

export default function Navbar() {
  const apiUrl = "https://www.googleapis.com/oauth2/v3/userinfo";
  const id = localStorage.getItem("id");
  const handleEnterData = async (data) => {
    const body = {
      email: data.email,
      name: data.name,
      img: data.picture,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      await fetch(`${configData.apiurl}/user/register`, requestOptions)
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp.data);
          localStorage.setItem("id", resp.data._id);
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          handleEnterData(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    },
  });

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      style={{
        // border: "1px solid white",
        paddingTop: "10px",
        margin: "auto",
        width: "75vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img style={{ width: "250px" }} src="logo2.png" alt="" />

      <div style={{ display: "flex", color: "white" }}>
        {/* <p>Workspace</p> */}
        {id ? (
          <>
            <Link to="/chat">
              <Button
                style={{ marginTop: "30px" }}
                rightIcon={<ArrowForwardIcon />}
                colorScheme="purple"
              >
                Start a Chat{" "}
              </Button>
            </Link>
            <Button
              onClick={() => handleLogout()}
              style={{ marginTop: "30px", marginLeft: "20px" }}
              // rightIcon={<ArrowForwardIcon />}
              colorScheme="purple"
            >
              Logout{" "}
            </Button>
          </>
        ) : (
          <Button
            onClick={() => login()}
            style={{ marginTop: "30px" }}
            colorScheme="purple"
          >
            <img
              style={{ width: "1.7vw", marginRight: "10px" }}
              src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
              alt=""
            />{" "}
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}
