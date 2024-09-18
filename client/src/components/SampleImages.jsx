import React, { useState, useEffect } from "react";
import Card from "./Card";
import CircularLoader from "./CircularLoader";
import { GetPosts } from "../api";
import SearchBar from "./SearchBar";

 
export default function SampleImages() {

    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [filteredPost, setFilteredPost] = useState([]);

    const getPosts = async () => {
        setLoading(true);
        await GetPosts().then((res) => {
            setLoading(false);
            setPost(res?.data?.data);
            filteredPost(res?.data?.data);
        }).catch((error) => {
            setError(error?.response?.data?.message);
            setLoading(false);
        });
    }

    useEffect(() => {
        getPosts();
    }, [null]);

    //Search Functionality
    useEffect(() => {
        if(!search) {
            setFilteredPost(post);
        }
        const SearchFilteredPost = post.filter((post) => {
            const searchText = search.toString().toLowerCase();
            const promptMatch = post?.prompt?.toLowerCase().includes(searchText);
            const authorMatch = post?.author?.toLowerCase().includes(searchText);

            return promptMatch || authorMatch;
        });
        
        if(search) {
            setFilteredPost(SearchFilteredPost);
        }
    }, [post, search]);

    return(
        <section className="bg-white w-full pb-[50px]">

            <div>
                <h1 id="sample-heading" className=" pixel tracking-wide text-center pt-[50px] font-extrabold text-6xl text-slate-950">Check Out Some Generated Images</h1>
                <p id="sample-heading2" className="roboto text-black text-center py-2 mb-12 text-xl">Below are some AI-Generated Images along with their prompts.</p>
            </div>

            {error && <div className="text-red-600 inter">{error}</div> }
            <SearchBar search={search} setSearch={setSearch} />

            {loading ? <div className="text-center inter text-lg" ><CircularLoader/> Still Loading Posts... </div> :

            (<div>
                {/* Image Cards */}

                {filteredPost.length === 0 ? (<div className="text-center inter text-xl">No Posts Found</div>) : (
                    <div id="posts-cont" className="w-[95%] roboto mx-auto grid grid-cols-3 gap-[20px]">
                    {filteredPost.slice().reverse().map((item, i) => (
                        // console.log(item.imgSrc, item.author, item.prompt);
                        <Card
                         key={i}
                         imgSrc={item.imgSrc}
                         prompt={item.prompt}
                         author={`Author: ${item.author}`}
                        />
                    ))}
                    </div>
                )}
            </div>)}

            {/* <div className="w-[1080px] mx-auto grid grid-cols-2 h-[700px]">
                <div className="w-[540px] h-[350px] bg-black border-2 border-black hover:border-white">
                    <img className="" src="https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp" alt="AI-Images-Examples" />
                </div>
                <div className="w-[540px] h-[350px] hover:bg-gray-200 border-2 border-white">
                    <img className="" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="AI-Images-Examples" />
                </div>
                <div className="w-[540px] h-[350px] hover:bg-gray-200 border-2 border-white">
                    <img className="" src="https://img-cdn.pixlr.com/image-generator/history/6565c8dff9ef18d69df3e3a2/fe1887b5-015e-4421-8c6a-1364d2f5b1e9/medium.webp" alt="AI-Images-Examples" />
                </div>
                <div className="w-[540px] h-[350px] bg-black border-2 border-black hover:border-white">
                    <img className="" src="https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp" alt="AI-Images-Examples" />
                </div>
            </div> */}
        </section>
    );
}