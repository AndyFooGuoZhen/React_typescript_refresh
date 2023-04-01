//Defining props with larger structure
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
export const Person = (props: PersonProps) => {
  return (
    <div>
      <h2>Person with {props.name.first}</h2>
    </div>
  );
};
