import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-4 border-cyan-500 text-center fixed top-0 bg-cyan-600 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8 ">
            Home
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/about" className="pl-6 pr-8 ">
            About
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/practice-react" className="pl-6 pr-8 ">
            Practice React
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/api-test" className="pl-6 pr-8 ">
            API Tesing
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/js-practice" className="pl-6 pr-8 ">
            js-practice
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
