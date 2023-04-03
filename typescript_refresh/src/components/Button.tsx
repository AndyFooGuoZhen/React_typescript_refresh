import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Main";

export const Button = () => {
  const state = useContext(Context);
  console.log(state);

  return (
    <div>
      <button onClick={() => state.setPressed(!state.pressed)}>Hello</button>
      <br></br>
      {state.pressed ? "Pressed" : "Not pressed"}
      <br></br>
      <Link to="/">Go to main page</Link>
    </div>
  );
};
