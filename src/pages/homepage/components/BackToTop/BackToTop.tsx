import { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(307.919); // Full circle
  const [isVisible, setIsVisible] = useState(false);
  const pathLength = 307.919; // Fixed for the given SVG path

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scrollTop * pathLength) / scrollHeight;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 50); // Show button if scrolled down
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className={`back-to-top fixed w-[38px] h-[38px] right-[15px] bottom-[15px] z-10 rounded-[20px] cursor-pointer bg-white text-[#f41a4a] border border-solid border-[#f41a4a] flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="ri-arrow-up-line text-[20px]"></i>
      <div className="back-to-top-wrap absolute inset-0">
        <svg viewBox="-1 -1 102 102" className="w-[36px] h-[36px]">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            className="fill-transparent stroke-[#f41a4a] stroke-[5px]"
            style={{
              transition: "stroke-dashoffset 10ms linear",
              strokeDasharray: `${pathLength}, ${pathLength}`,
              strokeDashoffset: scrollProgress,
            }}
          ></path>
        </svg>
      </div>
    </a>
  );
};

export default BackToTop;
