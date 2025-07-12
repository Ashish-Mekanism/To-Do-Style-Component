import React from "react";
import { StyledButton } from "./Button.style";

const Button = () => {
  return (
    <div>
      <button className="todo-button">Click Me</button>
      <StyledButton colour="outline">Styled Button</StyledButton>
      <StyledButton>Styled Button</StyledButton>
    </div>
  );
};

export default Button;
