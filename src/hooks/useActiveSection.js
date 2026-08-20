import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(
    sectionIds?.[0] || "home"
  );

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const getNavHeight = () =>
      document.querySelector(".navbar")?.getBoundingClientRect().height || 0;

    const updateFromScrollPosition = () => {
      const activationLine = getNavHeight() + 24;
      let currentSection = elements[0].id;

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top <= activationLine) {
          currentSection = element.id;
        }
      });

      setActiveSection(currentSection);
    };

    const observer = new IntersectionObserver(
      () => updateFromScrollPosition(),
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: `-${getNavHeight()}px 0px -55% 0px`,
      }
    );

    elements.forEach((el) => observer.observe(el));
    updateFromScrollPosition();
    window.addEventListener("scroll", updateFromScrollPosition, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateFromScrollPosition);
    };
  }, [sectionIds]);

  return activeSection;
}