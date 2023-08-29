import React from "react";
import { Text } from "@chakra-ui/react";

export default function Connect() {
  const data = [
    "React.js",
    "Node.js",
    "HTML & CSS",
    "Android",
    "Flutter",
    "Machine Learning",
    "Artificial Intellegence",
    "Python",
    "React Native",
  ];
  return (
    <div
      style={{
        // border: "1px solid white",
        margin: "auto",
        width: "75vw",
        height: "120vh",
      }}
    >
      <Text
        style={{ textAlign: "center" }}
        bgGradient="linear(to-l, #ffffff, #ff2894)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="bold"
      >
        Connect with the developers from different domains
      </Text>

      <div style={{ marginTop: "20px" }}>
        <div className="ag-format-container">
          <div className="ag-courses_box">
            {data &&
              data.map((d) => (
                <div className="ag-courses_item">
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">{d}</div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
