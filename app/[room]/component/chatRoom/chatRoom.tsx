import InputBox from "./inputBox";

export default function CharRoom(props: any) {
  return (
    <section className="flex flex-col m-auto h-full shadow-lg w-[100%] mx-0">
      <div>
        <header className="flex items-center bg-white h-20 border-slate-300 ">
          <h2 className="text-4xl font-bold">{props.room}번 방</h2>
        </header>
        <div className="h-2 bg-gradient-to-b from-gray-200"></div>
      </div>
      <div className="flex h-full  flex-col justify-between">
        <div className="">
          <div className="text-xl h-20">{props.room}</div>
          <div>{props.room}</div>
          <div>{props.room}</div>
          <div>{props.room}</div>
        </div>
        <InputBox />
      </div>
    </section>
  );
}
