import { React } from "react";

export default function Jokes(props) {
  console.log(props);
  return (
    <div>
      {props.headline && <h1> {props.headline}</h1>}
      <h3>{props.punchline}</h3>
    </div>
  );
}
