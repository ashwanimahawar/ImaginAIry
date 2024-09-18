import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
      const navigate = useNavigate();

      useGSAP(() => {

        gsap.fromTo("#hero-title", {
          opacity:0,
          y:50
        }, {
          opacity:1,
          delay:0.5,
          ease: "power2.out",
          y:0
        })

        gsap.fromTo("#hero-box", {
          opacity:0, y:50
        }, {
          opacity:1,
          delay:0.5, 
          y:0,
          ease: "power2.out"
        })

        gsap.fromTo("#hero-btn", {
          opacity:0,
          y:50
        }, {
          opacity:1,
          y:0,
          delay:1,
          ease: "bounce.out"
        })

      }, []);

      return(
        <section id="hero-section" className="w-[78%] min-h-[850px] mx-auto py-[150px] text-center px-4 md:px-8">
    <div>
      <div className="space-y-10">
        <h1 id="hero-title" className=" text-6xl leading-5 inter md:text-6xl text-white font-bold"><span id="hero-title2" className="text-yellow-500 text-7xl">Unleash</span> Your Creativity with <span id="hero-title2" className=" text-7xl text-red-600" >AI-Generated</span> Images</h1>
        <p id="hero-desc" className="roboto text-sm text-gray-500 px-10">The AI Image Generator is a powerful and intuitive tool that allows users to create stunning images through simple text prompts. Users can input a description, and the AI instantly generates a high-quality image based on their input. Once satisfied with the result, users can easily create a post showcasing the generated image, along with the original text prompt that inspired it. The tool has a field for author in which user can enter their name, allowing them to share their creativity with the community. Posts can be viewed, downloaded, and further inspire other creators, fostering a vibrant and interactive platform for artistic exploration.</p>
        <p id="hero-desc2" className="roboto text-lg font-bold text-gray-300">
          Discover a world of endless possibilities with our powerful AI image generation tool. Bring your ideas to life with just a few clicks.
        </p>
        <div className="flex justify-center">
          <button id="hero-btn"
          onClick={() => navigate("create-post")} 
          className="roboto inline-flex items-center justify-center whitespace-nowrap text-lg font-medium focus:outline-none disabled:pointer-events-none hover:bg-red-600 focus:outline-none focus:bg-red-600 focus:text-black disabled:opacity-50 h-10 bg-[#4b5563] text-white px-20 py-6 rounded-md">
            <span className="mr-3">Try Now</span><ArrowOutwardRoundedIcon />
          </button>
        </div>
        <div id="hero-box" className="transition-colors w-full mx-auto bg-transparent border-[1px] border-slate-500 hover:border-white transition-all rounded-lg py-5 px-8">
          <h2 className="text-white text-left inter font-bold text-xl" >Follow these easy steps:</h2>
          <ul className="roboto pt-3 text-md text-gray-500 text-left" >
            <li>1. Click on "Try Now" or "Create Post" button.</li>
            <li>2. Enter the prompt (detail about the image that you want to generate) and click on "Generate Image" button.</li>
            <li>3. Then write your name as "Author" and click on "Post Image" button.</li>
            <li>4. Your image will be posted and will appear in the explore section, you can click on the "download icon" to download the image.</li>

          </ul>
        </div>
      </div>
    </div>
  </section>
    );
}