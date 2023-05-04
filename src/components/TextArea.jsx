import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/notes/notesSlice";

function TextArea() {
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewNote(title));
    setTitle("");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/12">
        <form
          className="border-2 border-gray-400 rounded-md py-1 px-2"
          id="myForm"
          onSubmit={handleSubmit}
        >
          <div>
            <textarea
              placeholder="What needs to be done?"
              className="w-96 h-28"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-evenly w-44">
              <div className="w-6  h-6 rounded-3xl bg-purple-500 border border-purple-500">
                {" "}
              </div>
              <div className="w-6  h-6 rounded-3xl bg-green-500 border border-green-500">
                {" "}
              </div>
              <div className="w-6  h-6 rounded-3xl bg-cyan-500 border border-cyan-500">
                {" "}
              </div>
              <div className="w-6  h-6 rounded-3xl bg-yellow-400 border border-yellow-400">
                {" "}
              </div>
              <div className="w-6  h-6 rounded-3xl bg-pink-400 border border-pink-400">
                {" "}
              </div>
            </div>
            <button
              type="submit"
              form="myForm"
              className="bg-blue-400 text-pink-50 py-1 px-3 rounded-2xl font-bold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TextArea;
