import React, { useEffect, useRef } from "react";
import "./StyleSheets/Arrow.css";

const Arrow = () => {
  const arrowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (arrowRef.current) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const opacity = 1 - window.scrollY / maxScroll;
        arrowRef.current.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="down-arrow" ref={arrowRef}></div>;
};

export default Arrow;
