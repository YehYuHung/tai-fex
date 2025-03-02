import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import classNames from "classnames";

// === 添加對應外層 router 對應 Path
const navItemList = [
  { routerTo: "/detail", pageName: "資料表" },
  { routerTo: "/button", pageName: "按鈕樣式" },
  // { routerTo: "/rounded", pageName: "測試" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: number;

    const handleScroll = () => {
      if (timer) clearTimeout(timer);
      setIsVisible(true);
      timer = setTimeout(() => {
        if (window.scrollY > 10) {
          setIsVisible(false);
        }
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const navClass = classNames(
    "sticky top-0 z-50 bg-gradient-to-br from-gray-100 to-blue-200 text-gray-800 p-4 shadow-lg",
    {
      "-translate-y-full transition duration-300": !isVisible,
    }
  );

  const renderNavItem = (
    <>
      {navItemList.map((item) => {
        return (
          <NavItem key={item.pageName} to={item.routerTo}>
            {item.pageName}
          </NavItem>
        );
      })}
    </>
  );

  return (
    <nav className={navClass}>
      <div className="container mx-auto flex justify-between items-center">
        <NavItem to="/" isLogo>
          自建改造
        </NavItem>
        <div className="space-x-4">{renderNavItem}</div>
      </div>
    </nav>
  );
}

function NavItem({
  to,
  children,
  isLogo = false,
}: {
  to: string;
  children: React.ReactNode;
  isLogo?: boolean;
}) {
  const classes = classNames(
    {
      "text-xl": isLogo,
    },
    "font-medium transition duration-300 inline-block text-gray-800 hover:text-gray-600 hover:font-semibold hover:scale-110"
  );

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
