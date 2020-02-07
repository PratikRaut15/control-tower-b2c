import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Content from "./components/SidebarContent";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;
