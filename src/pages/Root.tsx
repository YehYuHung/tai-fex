import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/SrollToTop";

function Root() {
  const bubbleContent = [...Array(15)].map((_, i) => {
    const line = `${Math.random() * 70 + 20}px`;
    return (
      <div
        key={i}
        className="bubble absolute bg-white rounded-full opacity-30"
        style={{
          width: line,
          height: line,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`, // 讓每個泡泡不同時機出現
          animationDuration: `${Math.random() * 10 + 5}s`, // 5s ~ 15s
        }}
      ></div>
    );
  });

  return (
    <div className="relative min-h-screen">
      {/* 背景層 */}
      <div className="fixed z-10 inset-0 bg-gradient-to-b from-blue-900 to-black overflow-hidden">
        {bubbleContent}
      </div>
      <div className="relative z-10 text-white">
        <Header />
        <div className="container m-auto p-5">
          <Outlet />
        </div>
      </div>
      <div className="fixed z-10 bottom-6 right-6">
        <ScrollToTop />
      </div>
    </div>
  );
}

export default Root;
