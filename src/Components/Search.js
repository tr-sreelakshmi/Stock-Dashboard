import React, { useContext, useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchResults from "./SearchResults";
import ThemeContext from "../Context/ThemeContext";
import { searchSymbols } from "../api/stock-api";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);

  const [input, setInput] = useState("");
  const [bestMatch, setBestMatch] = useState([]);
  //clear function
  const clear = () => {
    setInput("");
    setBestMatch([]);
  };
  //update best match
  const updateBestMatch = async () => {
    try {
      if (input) {
        const SearchResults = await searchSymbols(input);
        const result = SearchResults.result;
        setBestMatch(result);
      }
    } catch (error) {
      setBestMatch([]);
      console.log(error);
    }
  };
  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96  ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >


      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search Stock..."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatch();
          }
        }}
      />


      {input && (
        <button onClick={clear} className="m-1 ">
          <XMarkIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}

      <button
        onClick={updateBestMatch}
        className=" h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2  transition duration-300 hover:ring-2 ring-indigo-400 "
      >
        <MagnifyingGlassIcon className="h-4 w-4 fill-gray-100" />
      </button>
      
      {input && bestMatch.length > 0 ? (
        <SearchResults results={bestMatch} />
      ) : null}
    </div>
  );
};

export default Search;
