import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setField, setSearch, setType } from "../../redux/sortSlice";

export default function SelectMenu() {
  const [showSearch, setShowSearch] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { search, type, field } = useSelector((state) => state.sort);

  const onClick = () => {
    setShow((prev) => !prev);
  };
  const onChageType = (e) => {
    const value = e.target.value;
    if (value === "inclusion") {
      setShowSearch(true);
    } else {
      setShowSearch(false);
      dispatch(setType(value));
    }
  };

  return (
    <Box m={1}>
      <Button
        onClick={onClick}
        variant={"contained"}>
        Open Select Menu
      </Button>
      {show && (
        <Stack spacing={2}>
          <FormControl
            fullWidth
            sx={{ mt: 2 }}>
            <InputLabel id='demo-simple-select-label'>Field</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={field}
              label='Field'
              onChange={(e) => dispatch(setField(e.target.value))}>
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"amount"}>Amount</MenuItem>
              <MenuItem value={"distance"}>Distance</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Type</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={showSearch ? "inclusion" : type}
              label='Comparison'
              onChange={onChageType}>
              <MenuItem value={1}>Возрастание</MenuItem>
              <MenuItem value={-1}>Убывание</MenuItem>
              <MenuItem value={"inclusion"}>Вкючение или равно</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            {showSearch && (
              <TextField
                onChange={(e) => dispatch(setSearch(e.target.value))}
                value={search}
                placeholder='Value'></TextField>
            )}
          </FormControl>
        </Stack>
      )}
    </Box>
  );
}
