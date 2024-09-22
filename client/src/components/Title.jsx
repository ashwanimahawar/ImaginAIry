import React from "react";

export default function Title(props) {
    return(
        <h1 id="title-component" className="text-center font-bold text-5xl inter">{props.text}</h1>
    );
}