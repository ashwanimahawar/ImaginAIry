import React from "react";
import Title from "./Title";

export default function AboutUs() {
    return (
        <section className="min-h-[800px] w-full text-white py-10 pb-20">
            <Title text="About Us - ImaginAIry"></Title>
            {/* <p id="generate-para" className="inter text-center my-5 text-red-600 tracking-widest">Image Generator Tool!</p> */}
            <div id="AC-container" className=" border rounded-lg border-zinc-500 mt-8 text-left inter w-[80%] mx-auto py-10">
                <p id="para" className=" px-20 text-lg">
                Welcome to ImaginAIry, where innovation and creativity blend seamlessly with the power of artificial intelligence. Our platform is designed for creators, artists, and enthusiasts who seek to transform their ideas into captivating visual art. At ImaginAIry, we believe that everyone has a unique vision, and through our AI-powered tool, you can now bring that vision to life—whether you're a seasoned artist or someone just exploring creative possibilities. Share your creations with the world, explore the creative works of others, and download your favorite images—all in one place. Our goal is to make AI-driven art accessible, fun, and collaborative for everyone.
                </p> <br />
                <p id="para" className=" px-20 text-lg">
                With ImaginAIry, you can enter a text prompt and watch as AI transforms it into an extraordinary image. You can then personalize your creation by adding your name as the author and share it with the world. The community can explore, appreciate, and even download these creative works from our extensive image gallery. ImaginAIry isn't just a tool for image generation; it's a creative hub where ideas are shared, and inspiration flows freely.
                </p> <br />
                <p id="para" className=" px-20 text-lg">
                Whether you're looking for artistic inspiration, want to showcase your work, or simply enjoy browsing through creative visuals, ImaginAIry is your go-to platform. We are constantly evolving to bring more features and innovations to help you explore the endless possibilities of AI-driven art.
                </p>

                <h2 id="questions" className="px-40 font-bold text-gray-500 text-3xl pt-10 pb-3"><span className="text-4xl text-red-700">1.</span> Who are we?</h2>
                <p id="questions" className="px-40 text-zinc-500">We are ImaginAIry, a community-driven platform that harnesses the power of artificial intelligence to help people transform their ideas into visual art. We are passionate about enabling creativity through technology and providing a space for users to explore, create, and share AI-generated images.</p>
                <h2 id="questions" className="px-40 font-bold text-gray-500 text-3xl pt-10 pb-3"><span className="text-4xl text-red-700">2.</span> What do we do?</h2>
                <p id="questions" className="px-40 text-zinc-500">At ImaginAIry, we provide a unique platform where users can input prompts and generate stunning images using AI. Once created, users can customize their image with their name as the author and share it on our platform. We offer an 'Explore' section where everyone can browse through a variety of creative works, and each image is available for download. Our mission is to inspire creativity, foster collaboration, and make AI-generated art accessible to all.</p>
            </div>

        </section>
    );
}