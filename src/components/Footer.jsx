import React from "react";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="p-6 text-white text-2xl absolute bottom-0 flex w-screen bg-dark-purple justify-center">
      Developed by&nbsp;
      <div className="mt-1">
        <a href="https://github.com/muudar">
          <FaGithub />
        </a>
      </div>
      &nbsp;
      <a href="https://github.com/muudar">muudar</a>
      &nbsp;
    </footer>
  );
}
