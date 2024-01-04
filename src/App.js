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
import SelectMenu from "./components/SelectMenu/SelectMenu";
import { useSelector } from "react-redux";
import React from "react";
import ModalContainer from "./components/Modal/Modal";
import TRow from "./components/Row/TRow";

export default function App() {
  const notes = useSelector((state)=> state.notes)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
          <ModalContainer open={open} handleOpen={handleOpen} handleClose={handleClose} textBtn={"Add note"}>
            <NoteAdd handleClose={handleClose}/>
          </ModalContainer>

          <SelectMenu />
          {/*{data && (*/}
          {/*  <PaginationControlled*/}
          {/*    countPage={data.countPage}*/}
          {/*    handleChange={handleChange}*/}
          {/*    page={page}*/}
          {/*  />*/}
          {/*)}*/}

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
                {notes &&
                  notes.map((note) => (
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
