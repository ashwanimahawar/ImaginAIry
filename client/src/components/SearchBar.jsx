import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function SearchBar({search, setSearch}) {
    return(
        <div className="flex justify-center">
            <div id="search" className="bg-slate-950 rounded-md text-white roboto text-lg mb-[80px] w-[500px]">
            <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text" 
            className="w-[90%] rounded-md bg-slate-950 px-8 py-3 focus:outline-none " 
            placeholder="Search prompt or author"
            />
            <button
            className="focus:outline-none">
            <SearchRoundedIcon />
            </button>
        </div>
        </div>
    );
}