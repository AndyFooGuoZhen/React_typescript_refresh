import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Link, Routes } from "react-router-dom";
import { LoginLogout } from "./components/LoginLogout";
import { Route } from "react-router-dom";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/another-page" element={<LoginLogout />}></Route>
        </Routes>
        <br></br>
      </BrowserRouter>
    </div>
  );
}

export default App;
