import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../redux/notes/notesSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchNote(e.target.value));
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-10">Notes App</h1>
      <div className="flex justify-center m-6">
        <form className="flex justify-evenly w-96">
          <input
            type="text"
            placeholder="Search..."
            className=" border-2 border-blue-500 hover:border-blue-300
           rounded-2xl p-0.5 pl-3 "
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
