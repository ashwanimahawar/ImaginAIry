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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <section className="bg-white w-full pb-[50px] min-h-[460px]">

            <div>
                <h1 id="sample-heading" className=" inter tracking-wide text-center pt-[50px] font-extrabold text-5xl text-slate-950">Check Out Some Generated Images</h1>
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
        </section>
    );
}
