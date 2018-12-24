import React from "react";

export default function SecondChild(props) {
  return (
    <div>
      <h1>User Input</h1>
      <input onChange={e => props.theBox(e.target.value)} />
    </div>
  );
}
