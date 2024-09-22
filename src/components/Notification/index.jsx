const Notification = () => {
  return (
    <a
      className={`text-[rgba(3,151,84,1)] flex items-center gap-x-2 font-bold text-xs bg-[rgba(40,199,128,0.15)] rounded-full pl-2  pr-3 py-[6px] cursor-pointer`}
    >
      <div className="bg-[rgba(3,151,84,1)] w-[6px] h-[6px] rounded-full"></div>
      ДОСТУПЕН ДЛЯ РАБОТЫ
    </a>
  );
};

export default Notification;
