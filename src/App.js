import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
} from "@mui/material";
import NoteAdd from "./components/NoteAdd/NoteAdd";
import { StyledContainer } from "./style";
import { useGetNotesQuery, useLazyGetNotesQuery } from "./service/noteApi";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationControlled({ countPage, handleChange, page }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={countPage}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
export default function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { search, type, field } = useSelector((state) => state.sort);
  const [fetchData, { data, isLoading }] = useLazyGetNotesQuery();
  const handleChange = (e, v) => {
    setPage(v);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData({ limit, page, search, field, type });
  }, [search, type, field, page]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}>
        <NoteAdd change />
        <SelectMenu />
      </Box>

      {data && (
        <PaginationControlled
          countPage={data.countPage}
          handleChange={handleChange}
          page={page}
        />
      )}

      <StyledContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Date</TableCell>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left'>Amount</TableCell>
              <TableCell align='left'>Distance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.notes.map((note) => (
                <TableRow
                  key={note.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{note.createdate}</TableCell>
                  <TableCell>{note.name}</TableCell>
                  <TableCell>{note.amount}</TableCell>
                  <TableCell>{note.distance}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </StyledContainer>
    </>
  );
}
