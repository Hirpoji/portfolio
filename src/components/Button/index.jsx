const Button = ({ color, bgColor, children, colorHover, bgHover, borderColor, href }) => {
  return (
    <a
      href={href}
      className={`pl-2 pr-3 ${color} ${bgColor} w-fit rounded-md text-sm font-semibold h-9 flex items-center gap-x-2 shadow-custom transition-all border-2  ${colorHover} ${bgHover} cursor-pointer ${borderColor}`}
    >
      {children}
    </a>
  );
};

export default Button;
