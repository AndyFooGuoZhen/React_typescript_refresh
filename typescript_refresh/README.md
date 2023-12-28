#Lessons learned

###Defining props with a certain type using a type or interface
Use ? to indicate optional fields
```
type GreetProps = {
  name: string;
  age?: number; //this age prop is optional
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>HEllo this is a greeting {props.name}</h2>
    </div>
  );
};
```

###useReducer 
Works like setState, instead of setState, pass in a custom function to handle condition 
```
export const Counter = () => {
  const initialState = { count: 0 };

  type CounterState = {
    count: number;
  };

  //Something like useState, instead of statestate,
  // the setState is replaced with a function called dispatch

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: CounterState, action: string): CounterState {
    switch (action) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  return (
    <div>
      <h2>Hello this is your count: {state.count} </h2>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <br></br>
      <Link to="/">Go to main page</Link>
    </div>
  );
};

  ```

###useContext
Used for passing down props to children components without passing into each level manually

Main.tsx
```
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

  return (
    <div>
      <StateProvider>
        <Nav />
      </StateProvider>
    </div>
  );
};
```

Nav.tsx
```
import { Button } from "./Button";

//Serves as a parent component for button
//Used for demonstrating useContext
export const Nav = () => {
  return (
    <div>
      <Button />
    </div>
  );
};
```

Button.tsx
```
 const Button = () => {
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
```