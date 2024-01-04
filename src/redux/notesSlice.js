import {createSlice} from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name: "notesSlice",
    initialState:[],
    reducers: {
        addNote(state, action){
            state.push(action.payload)
        },
        removeNote(state, action){
            state.filter((note)=> note.name !== action.payload )
        }
    }
})



export const {addNote, removeNote} = notesSlice.actions

export default notesSlice.reducer