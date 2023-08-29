import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import Conversation from "../Conversation/Conversation.js";
import ChatBox from "../ChatBox/ChatBox.js";
import { io } from "socket.io-client";
import Login from "../Login/Login";
import MainPage from "../../Pages/MainPage/Mainpage";
import { useNavigate } from "react-router-dom";
import configData from "../../Config.json";

export default function Chat() {
  const presentUser = localStorage.getItem("id");
  const socket = useRef();
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);

  // get the chats of a user in the chat section
  useEffect(() => {
    fetch(`${configData.apiurl}/chat/${presentUser}`)
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp);
        setChats(resp.data);
      });
  }, [presentUser]);

  //connect to socket.io
  useEffect(() => {
    socket.current = io(`ws://${configData.socketurl}`);
    socket.current.emit("new-user-add", presentUser);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [presentUser]);

  // sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // // receive message from socket server
  // useEffect(() => {
  //   socket.current.on("receive-message", (data) => {
  //     console.log(data);
  //     setReceiveMessage(data);
  //   });
  // }, []);
  // receive message from socket server
  // useEffect(() => {
  //   const receiveMessageHandler = (data) => {
  //     console.log(data);
  //     setReceiveMessage(data);
  //   };

  //   socket.current.on("receive-message", receiveMessageHandler);

  //   return () => {
  //     socket.current.off("receive-message", receiveMessageHandler);
  //   };
  // }, []);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data);
      setReceiveMessage(data);
    });
  }, []);

  const checkOnlineStatus = (chat) => {
    const chatMembers = chat.members.find((member) => member !== presentUser);
    const online = onlineUsers.find((user) => user.userId === chatMembers);
    return online ? true : false;
  };

  return (
    <div className="Chat">
      {presentUser ? (
        <>
          {/* Left Side */}
          <div className="Left-side-chat">
            <div className="Chat-container">
              {/* <h1 style={{ color: "white" }}>Dev Mania</h1> */}
              <img style={{ width: "15vw" }} src="logo2.png" alt="" />
              <div className="Chat-list">
                {/* {console.log(chats)} */}
                {chats &&
                  chats.map((d) => (
                    <div onClick={() => setCurrentChat(d)}>
                      {/* {d._id} */}
                      <Conversation
                        data={d}
                        currentUserId={presentUser}
                        online={checkOnlineStatus(d)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="right-side-chat">
            <ChatBox
              chat={currentChat}
              currentUser={presentUser}
              setSendMessage={setSendMessage}
              receiveMessage={receiveMessage}
            />
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
}
