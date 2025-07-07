// src/pages/Start.jsx
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

// 👇 Correctly import image from assets
import startImage from "../assets/start/start.png";

const Start = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
      }
    );

    // Redirect after delay
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-[#F9F6F1] flex items-center justify-center">
      <img
        ref={logoRef}
        src={startImage}
        alt="Clarté Start"
        className="w-60 h-auto object-contain drop-shadow-md"
      />
    </div>
  );
};

export default Start;
