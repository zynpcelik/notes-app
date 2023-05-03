import React from "react";

function SearchBar() {
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
          />
          <button className="border-2 border-blue-400 hover:bg-blue-500 hover:border-blue-500 bg-blue-400 text-yellow-50 rounded-xl py-1 px-3 font-bold">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
