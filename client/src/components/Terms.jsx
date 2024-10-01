import React from "react";
import Title from "./Title";
import Paragraphs from "./Paragraphs";
import Heading3 from "./Heading3";

export default function Terms() {
  const updatedDate = " September 30, 2024";

  return (
    <section className="min-h-[800px] w-full text-white py-10 pb-20">
      <Title text="Terms and Conditions - ImaginAIry" />

      <div
        id="AC-container"
        className=" border rounded-lg border-zinc-500 mt-8 text-left inter w-[70%] mx-auto py-10"
      >
        <p id="para" className=" px-20 text-sm text-gray-500">
          Last updated:{updatedDate}
        </p>
        <br />
        <Paragraphs text="Welcome to ImaginAIry. By using this website, you agree to the following terms:" />
        <Heading3 text="1. Use of Service" />
        <Paragraphs text="ImaginAIry allows users to generate AI-powered images from prompts. You may explore, share, and download images in accordance with the following guidelines." />
        <Heading3 text="2. Content Ownership" />
        <Paragraphs text="Images generated on ImaginAIry are attributed to the user who provided the prompt. You may share and download these images with appropriate credit to the original creator." />
        <Heading3 text="3. Prohibited Content" />
        <Paragraphs text="Users must not submit prompts that result in illegal, harmful, or explicit content. ImaginAIry reserves the right to remove such content without notice." />
        <Heading3 text="4. Liability" />
        <Paragraphs text="ImaginAIry does not guarantee the accuracy or appropriateness of generated images and is not responsible for any misuse of content generated." />
        <Heading3 text="5. Termination" />
        <Paragraphs text="ImaginAIry reserves the right to terminate access to its services if users violate these terms." />
        <Heading3 text="6. Modifications" />
        <Paragraphs text="These terms may be updated at any time, and it is the user's responsibility to review them periodically." />
      </div>
    </section>
  );
}
