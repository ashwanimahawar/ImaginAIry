import React from "react";
import CircularLoader from "./CircularLoader";

export default function GeneratedImage({ post, imageLoading }){

    return(
        <div id="generated-img" className="h-[480px] flex gap-5 justify-center items-center w-[45%] my-8 outline-dashed rounded-xl bg-transparent ">

            {post.imgSrc ? (<img src={post.imgSrc} className="w-full h-full rounded-xl" alt="" />)
            :
            (   
            <div className="flex gap-3">
                {
                    imageLoading ?  (<> <CircularLoader /> <p className="pt-1 text-lg inter text-slate-300">
                 Generating your Image....</p></>)  :(<p className="text-lg inter text-slate-300">
                Your Image will Show up Here</p>)
                }
            </div>)}

        </div>
    );
}