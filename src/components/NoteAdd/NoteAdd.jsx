import React from "react";
import { Box, Button } from "@mui/material";
import { StyledForm, StyledInput } from "./style";
import {Controller, FormProvider} from "react-hook-form";
import useAddNoteForm from "./useAddNoteForm";

const NoteAdd = ({handleClose}) => {

  const {form, submit} = useAddNoteForm(handleClose)

  return (
    <Box m={1}>
      <FormProvider {...form}>
        <StyledForm onSubmit={submit}>
          <Box
              display={"flex"}
              flexDirection={"column"}>
            <Controller render={({field, fieldState, formState})=>
                <StyledInput helperText={fieldState.error?.message }
                {...field}
                placeholder='Name'
                variant='standard'
            /> } name={"name"}/>

            <Controller render={({field, fieldState, formState})=>
                <StyledInput helperText={fieldState.error?.message }
                             {...field}
                             placeholder='Amount'
                             variant='standard'
                /> } name={"amount"}/>

            <Controller render={({field, fieldState, formState})=>
                <StyledInput helperText={fieldState.error?.message }
                             {...field}
                             placeholder='Distance'
                             variant='standard'
                /> } name={"distance"}/>


            <Button
                variant='contained'
                type={"submit"}
                sx={{ border: "2px solid black", borderRadius: 2 }}>
              Confirm
            </Button>
          </Box>
        </StyledForm>
      </FormProvider>

    </Box>
  );
};

export default NoteAdd;
