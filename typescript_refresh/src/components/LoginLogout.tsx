import { Link } from "react-router-dom";
import { ReactEventHandler, useState } from "react";

//Shows defining types for useState
export const LoginLogout = () => {
  const [name, setName] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Another page</h2>
      <input
        placeholder="Enter name"
        type="text"
        onChange={handleInputChange}
      ></input>
      {name && <h1>HEllo {name}</h1>}
      <br></br>
      <Link to="/">Go to main page</Link>
    </div>
  );
};
