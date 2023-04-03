import { Person } from "./Person";
import { PersonList } from "./PersonList";
import { Greet } from "./Greet";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Nav } from "./Nav";
import React from "react";

//useContext can be used to pass down props to children components
//Link: https://www.youtube.com/watch?v=_HdrLsyAdJg
interface stateContext {
  pressed: boolean;
  setPressed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = React.createContext<stateContext>({
  pressed: false,
  setPressed: () => {},
});

function StateProvider(props: { children: React.ReactNode }) {
  const [pressed, setPressed] = useState(false);

  const value: stateContext = {
    pressed,
    setPressed,
  };

  return <Context.Provider value={value} {...props} />;
}
export const Main = () => {
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
    <div>
      <Greet name="ANdy" />
      <Person name={personName} />
      <PersonList names={personNameList} />
      <Heading>Hello</Heading>
      <Link to="/another-page">Go to another page</Link>
      <br></br>
      <Link to="/counter">useReducer tutorial</Link>
      <br></br>
      <StateProvider>
        <Nav />
      </StateProvider>
    </div>
  );
};
