import React from "react";

export default function ListItems({ text, link, linkText, strong }) {
  return (
    <li className="text-lg list-disc">
      <strong className="text-lg">{strong}</strong> {text}{" "}
      <span className="text-red-600 hover:underline">
        <a href={link} target="_blank" rel="external noreferrer noopener">
          {linkText}
        </a>
      </span>
    </li>
  );
}
