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
      <h1 className="text-3xl text-center mt-10 text-purple-700 font-semibold">
        Notes App
      </h1>
      <div className="flex justify-center m-6">
        <form className="flex justify-evenly w-96">
          <input
            type="text"
            placeholder="Search..."
            className=" border-2 border-purple-500 hover:border-purple-700 focus:ring-white
           rounded-2xl p-0.5 pl-3 "
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
