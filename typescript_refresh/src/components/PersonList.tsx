type PersonNameList = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonNameList) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <>
            <h2 key={name.first}>
              {name.first} {name.last}
            </h2>
          </>
        );
      })}

      <h2>Person with {props.names[0].first}</h2>
    </div>
  );
};
