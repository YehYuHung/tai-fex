import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 顯示或隱藏按鈕
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // 滾動超過300px就顯示按鈕
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 點擊按鈕時，滾動到頁面最上方
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`p-2 border-2 border-white text-white rounded-full transition-opacity duration-500 ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ease-in-out hover:scale-110`}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default ScrollToTop;
