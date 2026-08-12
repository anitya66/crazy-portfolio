import { useState, useEffect } from "react";
import profile from "../data/profile";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) setOpen(false);
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">{profile.name}</div>

      <div
        className={`menu ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(!open);
          }
        }}
      ></div>

      <ul className={open ? "open" : ""}>
        <li>
          <a href="#home" onClick={handleNavClick}>
            Home
          </a>
        </li>

        <li>
          <a href="#skills" onClick={handleNavClick}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={handleNavClick}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
