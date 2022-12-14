import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { StyledForm, StyledInput } from "./style";
import { useAddNoteMutation } from "../../service/noteApi";

const NoteAdd = () => {
  const [blur, setBlur] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [distance, setDistance] = useState("");
  const [addNote] = useAddNoteMutation("");

  const onSubmit = (e) => {
    e.preventDefault();
    addNote({ name, amount, distance });
    setName("");
    setAmount("");
    setDistance("");
  };

  return (
    <Box m={1}>
      <StyledForm onSubmit={onSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}>
          <StyledInput
            value={name}
            onChange={(eve) => setName(eve.target.value)}
            required
            error={blur && !name}
            onBlur={() => setBlur(true)}
            helperText={blur && !name ? "Pleace enter name" : null}
            placeholder='Name'
            variant='standard'
          />
          <StyledInput
            value={amount}
            onChange={(eve) => setAmount(eve.target.value)}
            placeholder='Amount'
            variant='standard'
          />
          <StyledInput
            value={distance}
            onChange={(eve) => setDistance(eve.target.value)}
            placeholder='Distance'
            variant='standard'
          />
          <Button
            variant='contained'
            type={"submit"}
            sx={{ border: "2px solid black", borderRadius: 2 }}>
            Confirm
          </Button>
        </Box>
      </StyledForm>
    </Box>
  );
};

export default NoteAdd;
