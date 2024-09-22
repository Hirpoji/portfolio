import { useState } from "react";
import Subtitle from "../components/Title/Subtitle";
import Title from "../components/Title/Title";
import Text from "../components/Text";
import Button from "../components/Button";
import Notification from "../components/Notification";
import { BadgePlus, Copy } from "lucide-react";
import List from "../components/List";
import LetsWork from "../components/LetsWork";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";

const Home = () => {
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("roadtothejun@gmail.com");
    setShowCopiedPopup(true);
    setTimeout(() => {
      setShowCopiedPopup(false);
    }, 2000);
  };

  return (
    <div className="bg-white w-full rounded-xl shadow-custom p-2 pt-8 md:mt-[100px] lg:mt-[100px] mt-[80px] flex flex-col gap-y-2">
      <div className="flex justify-between px-6">
        <Subtitle>Главная</Subtitle>
        <Notification />
      </div>

      <div className="px-6 md:mt-10 md:mb-10 lg:mt-10 lg:mb-10 mb-2 mt-2 flex">
        <div className="flex flex-col md:max-w-[320px] lg:max-w-[320px] w-full justify-between ">
          <div className="w-full md:hidden lg:hidden items-center justify-center flex mt-4">
            <div className="rounded-full w-[180px] h-[180px] bg-[rgb(250,250,250)] items-center justify-center flex">
              <img
                src="https://avatars.githubusercontent.com/u/127690636?v=4"
                className="rounded-full w-[160px] h-[160px]"
              />
            </div>
          </div>
          <div className="gap-y-2 flex flex-col mb-4">
            <Title>
              <div className="text-center md:text-left lg:text-left">
                Привет, Я Андрей
              </div>
            </Title>
            <Text>
              <div className="text-center md:text-left lg:text-left">
                Веб-разработчик с более чем 2 годами опыта
              </div>
            </Text>
          </div>
          <div className="flex gap-x-[12px] justify-center md:justify-start lg:justify-start">
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
            <div onClick={handleEmailCopy}>
              <Button
                color={"text-black"}
                bgColor={"bg-white border-2 shadow-none"}
                hoverColor={"hover:text-white"}
              >
                <Copy className="w-[14px] h-[14px]" />
                Email
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-full w-[180px] h-[180px] bg-[rgb(250,250,250)] md:flex lg:flex items-center justify-center hidden">
          <img
            src="https://avatars.githubusercontent.com/u/127690636?v=4"
            className="rounded-full w-[160px] h-[160px]"
          />
        </div>
      </div>

      <List />
      <LetsWork />
      <FollowMe />
      <Footer />

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

export default Home;
