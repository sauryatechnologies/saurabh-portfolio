
import { useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-navigation">
      <button
        className={`mobile-menu-button ${isOpen ? "menu-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <nav className="mobile-menu-panel" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <a
              className="mobile-menu-link"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span>↗</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

export default MobileNavigation;
