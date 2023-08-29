import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
// import { async } from "react-input-emoji";
import configData from "../../Config.json";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState();

  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const handleCreateChat = async (rid) => {
    const body = {
      senderId: id,
      receiverId: rid,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    if (id) {
      try {
        const resp = await fetch(`${configData.apiurl}/chat/`, requestOptions);
        navigate(`/chat`);
      } catch (error) {
        console.log("error=>", error);
        alert("error is occurred");
      }
    } else {
      alert("login first to chat");
    }
  };
  function check(i) {
    console.log("hii");
    return i._id != id;
  }
  useEffect(() => {
    fetch(`${configData.apiurl}/user/getAllUsers`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("all users=>", resp);
        resp.data = resp.data.filter(check);
        setData(resp.data);
      });
  }, []);

  return (
    <div
      style={{
        // border: "1px solid white",
        margin: "auto",
        width: "75vw",
        height: "90vh",
        // marginTop: "20px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "30px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Developers who wish to chat with you
      </h2>
      <div
        style={{
          width: "30vw",
          minHeight: "70vh",
          overflow: "auto",
          border: "1px solid white",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {data &&
            data.map((d) => (
              <div
                style={{
                  border: "1px solid white",
                  width: "23vw",
                  height: "12vh",
                  margin: "auto",
                  marginTop: "20px",
                  display: "flex",
                }}
              >
                <img
                  style={{
                    width: "4.5vw",
                    margin: "10px",
                    borderRadius: "50px",
                  }}
                  src={d.img}
                  alt=""
                />
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  {d.name}
                </p>
                <Button
                  onClick={() => handleCreateChat(d._id)}
                  style={{ marginTop: "20px", marginLeft: "20px" }}
                  colorScheme="purple"
                >
                  Start Chat
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
