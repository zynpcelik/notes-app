import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/notes/notesSlice";

function TextArea() {
  const [title, setTitle] = useState();
  const [color, setColor] = useState("bg-green-400");
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "") return;
    dispatch(addNewNote({ title, color }));
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
              className="w-full h-28 border-none focus:ring-white focus:border-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex justify-evenly w-36">
              <input
                name="colorSchema"
                type="radio"
                className=" bg-green-400 border-none focus:ring-green-400 checked:bg-green-400 hover:text-green-400 focus:text-green-400"
                value="bg-green-400"
                onChange={handleColorChange}
              />
              <input
                name="colorSchema"
                type="radio"
                className="bg-orange-400 border-none"
                value="bg-orange-400"
                onChange={handleColorChange}
              />
              <input
                name="colorSchema"
                type="radio"
                className="bg-pink-400 border-none"
                value="bg-pink-400"
                onChange={handleColorChange}
              />
              <input
                name="colorSchema"
                type="radio"
                className="bg-cyan-400 border-none"
                value="bg-cyan-400"
                onChange={handleColorChange}
              />
              <input
                name="colorSchema"
                type="radio"
                className="bg-yellow-400 border-none"
                value="bg-yellow-400"
                onChange={handleColorChange}
              />
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
