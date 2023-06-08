import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNote, setAll } from "../redux/notes/notesSlice";

function TextArea() {
  const [title, setTitle] = useState();
  const [color, setColor] = useState("bg-slate-500");
  const dispatch = useDispatch();

  useEffect(() => {
    const local = localStorage.getItem("notesAll");
    if (local) {
      dispatch(setAll(JSON.parse(local)));
    }
  }, [title]);

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
      <div className="w-4/12">
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
                className="bg-orange-400 border-none focus:ring-orange-400 checked:bg-orange-400 hover:text-orange-400 focus:text-orange-400"
                value="bg-orange-400"
                onChange={handleColorChange}
              />
              <input
                name="colorSchema"
                type="radio"
                className="bg-pink-300 border-none focus:ring-pink-300 checked:bg-pink-300 hover:text-pink-300 focus:text-pink-300"
                value="bg-pink-300"
                onChange={handleColorChange}
              />
              <input
                name="colorSchema"
                type="radio"
                className="bg-cyan-300 border-none  focus:ring-cyan-300 checked:bg-cyan-300 hover:text-cyan-300 focus:text-cyan-300"
                value="bg-cyan-300"
                onChange={handleColorChange}
              />
              <input
                name="colorSchema"
                type="radio"
                className="bg-yellow-300 border-none focus:ring-yellow-300 checked:bg-yellow-300 hover:text-yellow-300 focus:text-yellow-300"
                value="bg-yellow-300"
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
