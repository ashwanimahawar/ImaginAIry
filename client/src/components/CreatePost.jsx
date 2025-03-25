import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesome";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Title from "./Title";
import GeneratedImage from "./GeneratedImage";
import { GenerateAIImage, CreateNewPost } from "../api/index.js";
import CircularLoader from "./CircularLoader.jsx";

export default function CreatePost() {
  const [imageLoading, setImageLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);

  const [post, setPost] = useState({
    author: "",
    imgSrc: "",
    prompt: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const generateImageFun = async () => {
    setImageLoading(true);

    await GenerateAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          imgSrc: `data:image/jpeg;base64,${res?.data?.imgSrc}`,
        });
        setImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.errorMessage);
        setImageLoading(false);
      });
  };

  const createPostFun = async () => {
    setPostLoading(true);

    await CreateNewPost(post)
      .then((res) => {
        setPostLoading(false);
        navigate("/explore");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setPostLoading(false);
      });
  };

  return (
    <section className="min-h-[800px] w-full text-white py-10">
      <div id="create-title">
        <Title text="Generate Image using Prompt!" />
      </div>
      <p
        id="generate-para"
        className="inter text-center my-5 text-red-600 tracking-widest"
      >
        Generate Images with AI using prompts and post to share it with the
        community
      </p>

      <div
        id="generate-cont"
        className="flex mt-10 justify-center gap-[50px] w-[80%] min-h-[600px] mx-auto"
      >
        <div id="generate-form" className="pt-[60px] w-[45%] gap-5">
          <form className="flex flex-col" action="">
            <label className="inter block text-[15px] pl-2 font-light">
              AUTHOR
            </label>
            <input
              id="author-name"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              type="textarea"
              className="rounded-lg bg-transparent flex-1 mt-2 text-white px-4 py-3 roboto focus:outline-none border-[0.5px] border-slate-700"
              placeholder="Enter your name"
            />{" "}
            <br />
            <label className="inter block text-[15px] pl-2 font-light">
              IMAGE PROMPT
            </label>
            <textarea
              id="prompt"
              value={post.prompt}
              onChange={(e) => {
                setPost({ ...post, prompt: e.target.value });
                setError("");
              }}
              rows="8"
              type="textarea"
              className="focus:outline-none border-[0.5px] border-slate-700 rounded-lg flex-1 bg-transparent my-2 text-white px-4 py-3 roboto"
              placeholder="Write a detailed description about the image..."
            />
            {error && <div className="text-red-600 roboto py-2">{error}</div>}
          </form>

          <div id="create-buttons" className="flex mt-3 justify-center gap-3 ">
            <button
              className="roboto inline-flex items-center justify-center whitespace-nowrap text-md font-medium focus-visible:outline-none disabled:pointer-events-none hover:bg-red-600 focus:outline-none focus:bg-red-600 focus:text-black disabled:opacity-50 h-10 bg-[#4b5563] text-white px-8 py-3 rounded-md flex-1"
              disabled={post.prompt === ""}
              onClick={generateImageFun}
            >
              <AutoAwesomeRoundedIcon />
              <span className="ml-1">Generate Image</span>
            </button>
            <button
              className="roboto inline-flex items-center justify-center whitespace-nowrap text-md font-medium focus-visible:outline-none disabled:pointer-events-none hover:bg-red-600 focus:outline-none focus:bg-red-600 focus:text-black disabled:opacity-50 h-10 bg-[#4b5563] text-white px-8 py-3 rounded-md flex-1"
              disabled={
                post.prompt === "" || post.author === "" || post.imgSrc === ""
              }
              onClick={createPostFun}
            >
              {postLoading ? <CircularLoader /> : <CreateRoundedIcon />}
              <span className="ml-1">Post Image</span>
            </button>
          </div>
        </div>

        <GeneratedImage
          post={post}
          setPost={setPost}
          imageLoading={imageLoading}
          postLoading={postLoading}
          setImageLoading={setImageLoading}
          setPostLoading={setPostLoading}
        />
      </div>
    </section>
  );
}
