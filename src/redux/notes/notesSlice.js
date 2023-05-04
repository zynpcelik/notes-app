import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const notesStore = createSlice({
  name: "notes",
  initialState: {
    all: [],
    filtered: [],
  },
  reducers: {
    addNewNote: (state, action) => {
      state.all.push({
        id: nanoid(),
        title: action.payload.title,
        completed: false,
        color: action.payload.color,
      });
      localStorage.setItem("notesAll", JSON.stringify(state.all));
    },

    deleteNote: (state, action) => {
      state.all = state.all.filter((note) => note.id !== action.payload);
      localStorage.setItem("notesAll", JSON.stringify(state.all));
    },

    searchNote: (state, action) => {
      if (action.payload != "") {
        state.filtered = state.all.filter((search) =>
          search.title.includes(action.payload)
        );
      } else {
        state.filtered = state.all;
      }
    },
    setAll: (state, action) => {
      state.all = action.payload;
      state.filtered = action.payload;
    },
  },
});
export const { addNewNote, setAll, deleteNote, searchNote } =
  notesStore.actions;
export default notesStore.reducer;
