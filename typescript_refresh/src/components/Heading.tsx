type HeadingProps = {
  children: string; //children as props
};

export const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};
