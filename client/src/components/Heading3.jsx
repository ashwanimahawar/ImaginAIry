import React from "react";

export default function Heading3({text}) {
  return (
    <h3
      id="para"
      className="underline underline-offset-2 h text-xl font-bold px-20 py-3"
    >
      {text}
    </h3>
  );
}
