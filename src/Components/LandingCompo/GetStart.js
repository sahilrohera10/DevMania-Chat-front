import React from "react";
import { Text } from "@chakra-ui/react";

export default function GetStart() {
  return (
    <div
      style={{
        // border: "1px solid white",
        margin: "auto",
        width: "75vw",
        height: "80vh",
      }}
    >
      <img style={{ margin: "auto" }} src="justlogo.png" alt="" />

      <Text
        style={{ textAlign: "center", marginTop: "40px" }}
        // bgGradient="linear(to-l, #ffffff, #ff2894)"
        color="white"
        // bgClip="text"
        fontSize="5xl"
        fontWeight="bold"
      >
        Get started with DEV MANIA
      </Text>
      <Text
        style={{ textAlign: "center", marginTop: "10px" }}
        // bgGradient="linear(to-l, #ffffff, #ff2894)"
        color="white"
        // bgClip="text"
        fontSize="2xl"
        fontWeight="normal"
      >
        Let's Get Connect with ease. Get instant collaborations.
      </Text>
      <div
        style={{
          border: "2px solid white",
          borderRadius: "10px",
          width: "23vw",
          height: "50px",
          margin: "auto",
          marginTop: "40px",
          cursor: "pointer",
        }}
      >
        <Text
          style={{ textAlign: "center", marginTop: "5px" }}
          bgGradient="linear(to-l, #ffffff, #ff2894)"
          color="white"
          bgClip="text"
          fontSize="2xl"
          fontWeight="normal"
        >
          ✨ Start Chating
        </Text>
      </div>
    </div>
  );
}
