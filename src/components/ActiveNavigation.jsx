
import { useEffect } from "react";

function ActiveNavigation() {
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link[href^='#']");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const currentId = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            const linkId = link.getAttribute("href")?.slice(1);
            link.classList.toggle("active", linkId === currentId);
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}

export default ActiveNavigation;
