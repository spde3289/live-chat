import CharRoom from "./component/chatRoom/chatRoom";
import ParticipantCounter from "./component/ParticipantCounter";

export default function Room(props: any) {
  console.log(props);
  return (
    <main className="shadow-xl w-full mx-2 text-8xl ">
      <div className="w-full flex bg-white h-full">
        <CharRoom room={props.params.room} />
        <ParticipantCounter room={props.params.room} />
      </div>
    </main>
  );
}
