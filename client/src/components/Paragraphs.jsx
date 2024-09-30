import React from "react";

export default function Paragraphs({ text, strong, link, linkText }) {
  return (
    <p id="para" className="pb-3 px-20 text-lg">
      <strong className="text-lg">{strong}</strong> {text}{" "}
      <span className="text-red-600 hover:underline">
        <a href={link} target="_blank" rel="external noreferrer noopener">
          {linkText}
        </a>
      </span>
    </p>
  );
}
