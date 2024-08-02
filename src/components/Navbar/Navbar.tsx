import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  function toggleMenu() {
    if (window.innerWidth <= 1024) {
      setVisible(!visible);
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setVisible(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navB">
      <nav>
        <div className="container">
          <div className="logoA">
            <NavLink to="/React-Portfolio">Ali</NavLink>
          </div>
          <ul className={`navLinks ${visible ? "menu" : ""}`}>
            <li>
              <NavLink onClick={toggleMenu} to="About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleMenu} to="Portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggleMenu} to="Contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button onClick={toggleMenu} className="menuButton">
            <FontAwesomeIcon className="text-white" icon={faBars} />
          </button>
        </div>
      </nav>
    </div>
  );
}
