import React from "react";
import { Link } from "gatsby";
const Layout = ({ children }) => (
  <div>
    <header className="container mx-auto bg-red-300 p-5">
      <nav className="flex justify-between">
        <div>
          <Link to="/">CBN!</Link>
        </div>
        <ul className="flex flex-row">
          <li className="pr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-5">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="bg-gray-100">fun footer</footer>
  </div>
);

export default Layout;
