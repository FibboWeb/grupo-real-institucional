"use client";
import { Search } from "lucide-react";
import { useState } from "react";

function SearchBox() {
  const [searchString, setSearchString] = useState("");

  const handleSearch = (value: string) => {
    setSearchString(value);
  };

  return (
    <div className="search-block w-full mb-8">
      <div className="flex items-center w-full">
        <form className="w-full" action="/busca" method="get">
          <input
            id="search"
            name="search"
            aria-label="Search"
            type="text"
            placeholder="Pesquisar no blog..."
            className="bg-gray-200 text-slate-700  placeholder:text-slate-500 placeholder:font-light px-4 py-2 rounded-sm outline-none w-11/12"
            onChange={(e) => handleSearch(e.target.value)}
            // capturar o enter e redicionar o usuário para a página de busca com o resultado da sua pesquisa renderizada
            onKeyDownCapture={(e) => {
              if (e.key === "Enter" && (e.target as HTMLInputElement)) {
                window.location.href = `/busca?busca=${searchString}`;
              }
            }}
          />
          <button className="absolute rounded-sm bg-fb_blue_button p-2 w-10 text-white" type="submit">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
