import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

function Heading({ text }) {
  return <h1 className="font-bold text-xl py-2">{text}</h1>;
}

function Item({ text, link, xlink, icon }) {
  const navigate = useNavigate();
  return (
    <a href={xlink} target="_blank" rel="external noreferrer noopener">
      <button
        onClick={link && (() => navigate(`/${link}`))}
        className="font-light text-md block hover:underline hover:text-red-700"
      >
        <span>{icon}</span> {text}
      </button>
    </a>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [navigate]);

  return (
    <footer className="w-full text-white">
      <div
        id="footer-menu"
        className="inter flex my-20 justify-center w-full gap-5"
      >
        <div id="footer-item1" className="f-1 w-[25%] h-[220px]">
          <h1 className="roboto font-bold text-2xl py-2">
            Imagin<span className="text-red-600 ml-1">AI</span>ry
          </h1>
          <p className="font-light text-gray-400 text-md mb-2">
            Welcome to ImaginAIry, where innovation and creativity blend
            seamlessly with the power of artificial intelligence. Whether you're
            looking for artistic inspiration, want to showcase your work, or
            simply enjoy browsing through creative visuals, ImaginAIry is your
            go-to platform.
          </p>
        </div>
        <div id="footer-item2" className="f-2 w-[10%] h-[200px]">
          <Heading text="Quick Links" colour="rgb(20 83 45)" />
          <Item text="Terms and Conditions" link="terms" />
          <Item text="Privacy Policy" link="privacy" />
          <Item text="Cookies Preferences" link="cookies-preferences" />
          <Item text="About Us" link="about" />
          <Item text="Contact Us" link="contact" />
        </div>

        <div id="footer-item3" className="f-3 w-[10%] h-[200px]">
          <Heading text="Services" colour="rgb(76 29 149)" />
          <p className="font-light text-sm text-gray-400 block pb-2">You can Generate and explore images.</p>
          <Item text="Generate Images" link="create-post" />
          <Item text="Explore Images" link="explore" />
        </div>
        <div id="footer-item4" className="f-4 w-[14%] h-[200px]">
          <Heading text="Reachout to Us" />
          <p className="text-md pb-2">
            Email:{" "}
            <a
              className="text-gray-400 hover:underline hover:text-red-600"
              href="mailto:imaginairy77@gmail.com"
            >
              imaginairy77@gmail.com
            </a>
          </p>
          <Heading text="Develop" />
          <Item
            text="GitHub Repository"
            icon={<GitHubIcon />}
            xlink="https://github.com/ashwanimahawar/ImaginAIry"
          />
        </div>
      </div>

      <div className="roboto text-center py-4">
        <p id="copyright">Copyright © 2024 All rights reserved</p>
      </div>
    </footer>
  );
}
