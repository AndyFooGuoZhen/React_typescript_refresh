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
