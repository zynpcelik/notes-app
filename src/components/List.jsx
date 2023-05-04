import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, setAll } from "../redux/notes/notesSlice";

function List() {
  const store = useSelector((state) => state.notes.all);
  const dispatch = useDispatch();
  useEffect(() => {
    const local = localStorage.getItem("notesAll");
    dispatch(setAll(JSON.parse(local)));
  }, []);

  return (
    <div>
      <ul className=" grid grid-cols-4 p-10">
        {store.map((todo) => {
          return (
            <div
              key={todo.id}
              className="border-2 border-orange-400 rounded-md text-white p-2 font-semibold m-2 h-36 w-52 bg-orange-400 flex flex-col"
            >
              <button
                className="border-0 w-7 place-self-end text-gray-300"
                onClick={() => dispatch(deleteNote(todo.id))}
              >
                X
              </button>
              <li>{todo.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
