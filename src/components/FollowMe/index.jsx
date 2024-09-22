import { FiGithub } from "react-icons/fi";
import Subtitle from "../Title/Subtitle";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "../Button";
import { Copy } from "lucide-react";
import { useState } from "react";

const FollowMe = () => {
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("roadtothejun@gmail.com");
    setShowCopiedPopup(true);
    setTimeout(() => {
      setShowCopiedPopup(false);
    }, 2000);
  };
  return (
    <div
      className="bg-[rgba(247,247,247,1)] rounded-xl p-6 flex justify-between flex-col lg:flex-row md:flex-row"
      id="followMe"
    >
      <div className="flex justify-between">
        <Subtitle>Связаться со мной</Subtitle>
      </div>
      <div>
        <div className="flex gap-x-2 items-center justify-center mt-2">
          <div className="md:mr-4 lg:mr-4" onClick={handleEmailCopy}>
            <Button
              color={"text-black"}
              bgColor={"bg-white border-2 shadow-none"}
              hoverColor={"hover:text-white"}
              borderColor={"border-red"}
            >
              <Copy className="w-[14px] h-[14px]" />
              Email
            </Button>
          </div>

          <a
            target="_blank"
            href="https://github.com/Hirpoji"
            className="w-10 h-10 p-2 rounded-full bg-white border-[rgb(222,222,222)] border-2 flex justify-center items-center cursor-pointer transition-all hover:border-[4px]"
          >
            <FiGithub className="w-6 h-6" />
          </a>

          <a
            target="_blank"
            href="https://t.me/AAndrue"
            className="w-10 h-10 p-2 rounded-full bg-white border-[rgb(222,222,222)] border-2 flex justify-center items-center cursor-pointer transition-all hover:border-[4px]"
          >
            <FaTelegramPlane className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-lg shadow-lg transition-opacity transition-transform duration-300 ${
          showCopiedPopup
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        Скопировано!
      </div>
    </div>
  );
};

export default FollowMe;
