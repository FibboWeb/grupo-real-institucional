import { Search } from "lucide-react";

function SearchBox() {
  return (
    <div className="search-block w-full mb-8">
      <div className="flex items-center w-full">
        <form className="w-full" action="/busca" method="get">
          <input
            className="bg-gray-200 text-slate-700 placeholder:text-slate-900 placeholder:font-light px-4 py-2 rounded-sm outline-none w-11/12"
            type="text"
            id="search"
            name="search"
            placeholder="Buscar no blog..."
          />
          <button className="absolute rounded-sm bg-blue_button p-2 w-10 text-white" type="submit">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
