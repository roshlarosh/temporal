import * as React from "react";
import * as ReactDOM from "react-dom";

export interface InlineClickButtonProps {
  name: string;
}

const InlineClickButton = (props: InlineClickButtonProps) => {
  const [name, setName] = React.useState("");
  const handleClick = () => {
    alert("The link was clicked.");
  };
  return (
    <div>
      <button onClick={handleClick}> {props.name} </button>
    </div>
  );
};

export default InlineClickButton;
