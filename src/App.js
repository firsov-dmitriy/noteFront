import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import NoteAdd from "./components/NoteAdd/NoteAdd";
import { StyledContainer } from "./style";
import { useLazyGetNotesQuery } from "./service/noteApi";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import React, { useState } from "react";
import ModalContainer from "./components/Modal/Modal";
import TRow from "./components/Row/TRow";
import PaginationControlled from "./components/PaginElem";

export default function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
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
      <CssBaseline />
      <Box
        sx={{
          padding: 2,
          backgroundImage:
            "linear-gradient(to right top, #d16ba5, #c27bb7, #b38ac2, #a797c6, #a0a1c5, #9dabce, #9bb5d5, #9abeda, #8bcdea, #77ddf4, #65ecf7, #5ffbf1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ModalContainer textBtn={"Add note"}>
            <NoteAdd />
          </ModalContainer>

          <SelectMenu />
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
                    <TRow
                      key={note.id}
                      note={note}
                    />
                  ))}
              </TableBody>
            </Table>
          </StyledContainer>
        </Container>
      </Box>
    </>
  );
}
