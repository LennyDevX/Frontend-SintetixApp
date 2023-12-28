import React, { useState, useEffect, useRef } from "react";
import {
  MdNotifications,
  MdAccountCircle,
  MdMenu,
  MdSearch,
  MdAutorenew,
  MdLockOpen,
  MdPersonAdd,
} from "react-icons/md";
import "../css/components/TeamNavBar.css"; // Importa tus estilos CSS
import logo from "../../Img/SintetixLogo.png"; // Importa tu imagen de logo

const Navbar = () => {
  const [searching, setSearching] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState(""); // Nuevo estado para el texto de búsqueda
  const menuRef = useRef(); // Referencia para el menú

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchText(""); // Limpia el texto de búsqueda
      setSearching(true);
      // Simulate a search delay
      setTimeout(() => {
        setSearching(false);
      }, 2000);
    } else {
      setSearchText(event.target.value); // Actualiza el texto de búsqueda
    }
  };

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-group">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">Sintetix</h1>
        <a className="text">Blog</a>
        <a className="text">Detras de escena</a>
        <a className="text">Dev Hub</a>
        <a className="text">Servicios</a>
      </div>
      <div className="search-container">
        <input
          className="input"
          placeholder={searching ? "Buscando..." : "Explorar" }
          value={searchText}
          onKeyDown={handleSearch}
          onChange={handleSearch}
          
        />
        {searching ? <MdAutorenew className="spinning" /> : <MdSearch />}
      </div>
      <div className="right-group">
        <button className="profile-button navbar-icon">
          <MdNotifications />
        </button>
        <button className="profile-button navbar-icon">
          <MdAccountCircle />
        </button>
        <button
          className="profile-button navbar-icon"
          onClick={handleMenuClick}
        >
          <MdMenu />
        </button>
        <div className={`menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
          <button id="ButtonSub" className="submenu-button navbar-icon">
            <MdLockOpen /> Login
          </button>
          <button id="ButtonSub" className="submenu-button navbar-icon">
            <MdPersonAdd /> Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
