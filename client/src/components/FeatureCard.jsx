import React from "react";


export default function FeatureCard({ icon, title, description }) {


    return (
      <div id="feature-cards" className="bg-transparent border-[1px] transition-all hover:border-white border-slate-500 p-6 pb-10 rounded-lg text-center">
        <div className="mb-1 text-white flex justify-center">{icon}</div>
        <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    )
  }