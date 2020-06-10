import React from "react";

type Props = {
  name: string;
};

function Greeting({ name }: Props): JSX.Element {
  return <p>Hello {name}, welcome to React!</p>;
}

export default Greeting;
