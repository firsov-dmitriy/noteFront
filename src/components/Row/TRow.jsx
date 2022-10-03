import React from "react";
import { TableRow, TableCell } from "@mui/material";

const TRow = ({ note }) => {
  return (
    <TableRow
      key={note.id}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}>
      <TableCell>{note.createdate}</TableCell>
      <TableCell>{note.name}</TableCell>
      <TableCell>{note.amount}</TableCell>
      <TableCell>{note.distance}</TableCell>
    </TableRow>
  );
};

export default TRow;
