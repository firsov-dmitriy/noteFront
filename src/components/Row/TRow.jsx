import React from "react";
import { TableRow, TableCell } from "@mui/material";
import {format} from "date-fns";

const TRow = ({ note }) => {
  return (
    <TableRow
      key={note.id}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}>
      <TableCell>{format(note.createDate,"yyyy-MM-dd HH:mm:ss" )}</TableCell>
      <TableCell>{note.name}</TableCell>
      <TableCell>{note.amount}</TableCell>
      <TableCell>{note.distance}</TableCell>
    </TableRow>
  );
};

export default TRow;
