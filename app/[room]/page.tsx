import CharRoom from "./component/chatRoom/chatRoom";
import ParticipantCounter from "./component/ParticipantCounter";

export default function Room(props: any) {
  console.log(props);
  return (
    <main className="w-full px-2 text-8xl">
      <div className="w-full grid grid-flow-col grid-cols-[4fr_1fr] bg-slate-600 h-full">
        <CharRoom room={props.params.room} />
        <ParticipantCounter room={props.params.room} />
      </div>
    </main>
  );
}
