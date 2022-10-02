import React from "react";
import { StyledPaper } from "./style";

const Field = ({ note }) => {
  return (
    <StyledPaper>
      <h1>{note.name}</h1>
      <h1>{note.createdata}</h1>
    </StyledPaper>
  );
};

export default Field;
