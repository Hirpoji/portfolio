import Title from "../Title/Title";

const LetsWork = () => {
  return (
    <div className="flex flex-col gap-y-6 items-center py-12 px-2 pb-4">
      <div className="flex flex-col gap-y-6 items-center">
        <Title>
          <div className="text-center">Давайте работать вместе.</div>
        </Title>
        <div className="text-[rgb(105,105,105)] text-center" >
          Создаю интерфейсы, которые дарят удобство пользователю
        </div>
      </div>
    </div>
  );
};

export default LetsWork;
