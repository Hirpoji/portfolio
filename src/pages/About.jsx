import List from "../components/List/index";
import FollowMe from "../components/FollowMe";
import LetsWork from "../components/LetsWork";
import Text from "../components/Text";
import Subtitle from "../components/Title/Subtitle";
import Title from "../components/Title/Title";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white w-full rounded-xl shadow-custom p-2 pt-8 md:mt-[100px] lg:mt-[100px] mt-[80px]  flex flex-col gap-y-2">
      <div className="px-6 flex flex-col">
        <div className="mb-10">
          <Subtitle>Обо мне</Subtitle>
        </div>
        <div className="flex flex-col gap-y-4 mb-8">
          <Title>Высшее образование</Title>
          <Text>
            <div className="mb-1">
              Санкт-Петербургский государственный университет телекоммуникаций
              им. проф. М.А. Бонч-Бруевича
            </div>

            <div className="font-bold">Программная инженерия</div>
          </Text>
        </div>

        <div className="flex flex-col gap-y-4 mb-6">
          <Title>Стэк разработки</Title>
          <Text>React, Express, Vue, Next, Nest, Typescript.</Text>
        </div>

        <div className="flex flex-col gap-y-4 mb-8">
          <Title>Активности</Title>
          <Text>
            <a
              href="https://vk.com/bonch.gamedev"
              className="border-b-2 hover:text-black hover:border-black transition-all"
              target="_blank"
            >
              Bonch.Gamedev
            </a>
          </Text>
        </div>
      </div>
      <List />
      <LetsWork />
      <FollowMe />
      <Footer />
    </div>
  );
};

export default About;
