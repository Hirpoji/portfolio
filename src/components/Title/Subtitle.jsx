const Subtitle = ({children}) => {
  return (
    <div className="flex items-center">
      <div className="flex gap-x-4 items-center ">
        <div className="w-2 h-2 rounded-full bg-[rgb(204,204,204)]"></div>
        <div className="text-[rgb(105,105,105)] font-semibold text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Subtitle;
