import { Person } from "./Person";
import { PersonList } from "./PersonList";
import { Greet } from "./Greet";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";

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
    </div>
  );
};
