import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <footer
      id="footer"
      className="roboto h-[50px] w-full text-white flex justify-between items-center"
    >
      <div>
        <p id="footer-text" className="ml-[100px]">
          Copyright © 2024 All rights reserved
        </p>
      </div>

      <div>
        <ul id="footer-menu" className="flex gap-10 mr-[100px]">
          <li className="hover:text-red-500">
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li className="hover:text-red-500">
            <button onClick={() => navigate("/about")}>About</button>
          </li>
          <li className="hover:text-red-500">
            <button onClick={() => navigate("/contact")}>Contact</button>
          </li>
          <li className="hover:text-red-500">
            <button onClick={() => navigate("/privacy")}>Privacy</button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
