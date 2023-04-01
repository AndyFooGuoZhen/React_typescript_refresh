type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>HEllo this is a greeting {props.name}</h2>
    </div>
  );
};
