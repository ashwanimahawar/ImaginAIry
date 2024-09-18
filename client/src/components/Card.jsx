import React from "react";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import FileSaver from "file-saver";

export default function Card({imgSrc, author, prompt}) {
    return(
        <div id="card" className="shadow-md hover:scale-105 group transition-all rounded-xl text-white font-bold bg-gray-200 hover:bg-transparent">
                    <img id="card-image" src={imgSrc} alt="AI-Generated Images Example" className=" rounded-tr-xl rounded-tl-xl w-full h-[350px]" />
                    <button onClick={() => (FileSaver.saveAs(imgSrc, "Download.jpg"))} className="ml-[90%] bg-transparent opacity-0 m-0 mt-2 mr-[0px] text-black group-hover:opacity-100">
                    <FileDownloadRoundedIcon fontSize="medium"/>
                    </button>
                    <h3 className="text-black px-8">{author} </h3> 
                    <p className="text-black pb-6 px-8">{prompt}</p>
                </div>
    );
}