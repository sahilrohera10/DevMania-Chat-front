import React from "react";
import { Text } from "@chakra-ui/react";

export default function Working() {
  return (
    <div
      style={{
        // border: "1px solid white",
        margin: "auto",
        width: "75vw",
        height: "140vh",
      }}
    >
      <Text
        style={{ textAlign: "center" }}
        bgGradient="linear(to-l, #ffffff, #ff2894)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="bold"
      >
        How it Works
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: "10px",
          width: "40vw",
          margin: "auto",
        }}
        color="#ffffffd6"
        fontSize="5xl"
        fontWeight="bold"
      >
        Collab, Chat and Create for future
      </Text>

      <Text
        style={{
          textAlign: "center",
          marginTop: "30px",
          width: "40vw",
          margin: "auto",
        }}
        color="#ffffff99"
        fontSize="20px"
        fontWeight="bold"
      >
        Enthusiast developers with powerfull dev skills will together with unity
      </Text>

      <Text
        style={{
          textAlign: "center",
          marginTop: "40px",
          width: "40vw",
          margin: "auto",
        }}
        color="#ffffff"
        fontSize="3xl"
        fontWeight="bold"
      >
        Be confident and start a conversation 👇
      </Text>

      <img
        style={{
          height: "70vh",
          width: "70vw",
          margin: "auto",
          marginTop: "10px",
        }}
        src="help.png"
        alt=""
      />
    </div>
  );
}
