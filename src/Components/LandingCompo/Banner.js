import React from "react";

export default function Banner() {
  return (
    <div
      style={{
        width: "75vw",
        height: "80vh",
        // border: "1px solid white",
        margin: "auto",
        marginTop: "30px",
      }}
    >
      <p
        style={{
          color: "#ffffffd4",
          fontSize: "40px",
          fontWeight: "700",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        Let's Connect and Start a Conversation Today 🚀
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p></p>
        <img
          style={{ height: "350px", margin: "auto", marginTop: "40px" }}
          src="bannerPic1.png"
          alt=""
        />
      </div>
    </div>
  );
}
