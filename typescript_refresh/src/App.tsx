import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Andy",
    last: "Foo",
  };

  const personNameList = [
    {
      first: "John",
      last: "Foo",
    },
    {
      first: "Vincent",
      last: "Foo",
    },
    {
      first: "Ben",
      last: "Foo",
    },
  ];

  return (
    <div className="App">
      <Greet name="ANdy" />
      <Person name={personName} />
      <PersonList names={personNameList} />
    </div>
  );
}

export default App;
