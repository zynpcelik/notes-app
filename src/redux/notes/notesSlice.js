import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const notesStore = createSlice({
  name: "notes",
  initialState: {
    all: [],
    activeNotes: "",
  },
  reducers: {
    addNewNote: (state, action) => {
      state.all.push({ id: nanoid(), title: action.payload, completed: false });
      localStorage.setItem("notesAll", JSON.stringify(state.all));
    },
    deleteNote: (state, action) => {
      state.all = state.all.filter((note) => note.id !== action.payload);
      localStorage.setItem("notesAll", JSON.stringify(state.all));
    },
    setAll: (state, action) => {
      state.all = action.payload;
    },
  },
});
export const { addNewNote, setAll, deleteNote } = notesStore.actions;
export default notesStore.reducer;
