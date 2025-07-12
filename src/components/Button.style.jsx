import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.colour === "outline" ? "orange" : "#2c3e50"};
  border: 2px solid rebeccapurple;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1d244a;
  }
`;
