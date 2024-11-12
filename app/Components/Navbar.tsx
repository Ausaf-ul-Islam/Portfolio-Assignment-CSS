"use client";
import Link from "next/link";
import "../CSS/Navbar.css"; // Import Navbar CSS file

const Navbar = () => {


  return (
    <nav className="navbar">
        <ul>
          <li className="menu-item">
            <Link href="#home" className="menu-link">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link href="#about" className="menu-link">
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link href="#contact" className="menu-link">
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
