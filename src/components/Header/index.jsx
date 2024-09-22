import { useLocation, Link } from "react-router-dom";
import { User, PanelTop, BadgePlus } from "lucide-react";
import Button from "../Button";

const Header = () => {
  const location = useLocation();

  return (
    <header className="top-2 bg-white h-16 rounded-xl shadow-custom px-4 flex items-center justify-between fixed w-full max-w-[560px] z-10 lg:top-4 md:top-4">
      <div className="flex gap-x-4 items-center ml-4">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "rounded-full bg-[rgb(247,247,247)] w-10 h-10 flex justify-center items-center"
              : "rounded-full bg-white w-10 h-10 flex justify-center items-center"
          }`}
        >
          <PanelTop className="w-6 h-6" />
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about"
              ? "rounded-full bg-[rgb(247,247,247)] w-10 h-10 flex justify-center items-center"
              : "rounded-full bg-white w-10 h-10 flex justify-center items-center"
          }`}
        >
          <User className="w-6 h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-x-5">
        <Button
          color={"text-white"}
          bgColor={"bg-black"}
          bgHover={"hover:bg-white"}
          colorHover={"hover:text-black"}
          href={"#followMe"}
        >
          <BadgePlus className="w-[14px] h-[14px]" />
          Найми меня
        </Button>
      </div>
    </header>
  );
};

export default Header;
