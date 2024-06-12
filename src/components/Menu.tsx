import { useState } from "react";

import "./Navbar.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md">
      <nav className="flex items-center justify-between p-4 h-20 md:h-32">
        <div className="flex justify-between items-center w-full md:hidden">
          <a
            href="/"
            className="block transform hover:rotate-3 transition duration-300">
            <img
              src="/Logo.png"
              width="50"
              alt="Logo"
              className="rounded-lg object-contain object-center"
            />
          </a>
          <button
            className={`toggle_btn ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}></button>
        </div>
        <div className="hidden md:flex items-center justify-around w-full text-xl sm:text-3xl md:text-3xl">
          <a
            href="/about/"
            className="hover:text-gray-700 transform hover:scale-105 transition duration-300">
            Nosotros
          </a>
          <a
            href="/events/"
            className="hover:text-gray-700 transform hover:scale-105 transition duration-300">
            Eventos
          </a>
          <a
            href="/"
            className="block transform hover:rotate-3 transition duration-300">
            <img
              src="/public/Logo.webp"
              width="80"
              alt="Logo"
              className="rounded-lg object-contain object-center"
            />
          </a>
          <a
            href="/contact/"
            className="hover:text-gray-700 transform hover:scale-105 transition duration-300">
            Contacto
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transform hover:scale-105 transition duration-300">
            Donar
          </a>
        </div>
      </nav>
      <div className={`dropdown_menu ${isOpen ? "open" : ""} left-8 `}>
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => {
                setIsOpen(false);
              }}>
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(false);
              }}>
              Contacto
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}>
              Donar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
