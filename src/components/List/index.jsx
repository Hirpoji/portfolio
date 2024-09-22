import Subtitle from "../Title/Subtitle";
import Item from "../List/Item";
import LinkTo from "../Icon/LinkTo";

const List = () => {
  return (
    <div className="bg-[rgba(247,247,247,1)] rounded-xl p-[24px]">
      <div className="flex justify-between mb-6">
        <Subtitle>Проекты</Subtitle>
      </div>
      <div className="gap-y-4 flex flex-col ">
        <Item
          name="Яндекс Плюс Студия"
          description={"React"}
          icon="https://cdn.prod.website-files.com/64dceb0753b1f84b4c54f855/655de9eb0264e59f8dc0fd26_1200_630.webp"
          link={"https://www.plusstudio.yandex/"}
        ></Item>
        <Item
          name="Link To"
          description={"React, Redux, Express"}
          icon={<LinkTo />}
          link={"https://link-to-navy.vercel.app/"}
        ></Item>
        <Item
          name="Poizon delivery"
          description={"Next, Redux, Nest"}
          icon="https://poizon-shop-chi.vercel.app/logo.ico"
          link="https://poizon-shop-chi.vercel.app/"
        ></Item>
      </div>
    </div>
  );
};

export default List;
