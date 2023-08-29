import logo from "./logo.svg";
import "./App.css";
import Chat from "./Components/Chat/Chat.js";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/MainPage/Mainpage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import configData from "../src/Config.json";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={configData.clientId}>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Mainpage />}></Route>
              <Route path="/chat" element={<Chat />}></Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
