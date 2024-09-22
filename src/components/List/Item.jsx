import { ChevronRight } from "lucide-react";

const Item = ({ icon, name, description, link }) => {
  return (
    <a href={link} target="_blank" className="w-full p-4 bg-white rounded-xl flex shadow-custom  items-center justify-between cursor-pointer">
      <div className="items-center justify-between flex gap-x-4">
        <div className="rounded-full w-[64px] h-[64px] bg-[rgb(250,250,250)] flex items-center justify-center shadow-image ">
          {typeof icon === "string" ? (
            <img src={icon} className="rounded-full w-12 h-12 object-cover" />
          ) : (
            icon
          )}
        </div>
        <div className="flex gap-y-[6px] flex-col">
          <div className="text-xl font-semibold">{name}</div>
          <div className="font-medium text-[rgb(105,105,105)]">
            {description}
          </div>
        </div>
      </div>

      <ChevronRight className="text-[rgb(105,105,105)]" />
    </a>
  );
};

export default Item;
