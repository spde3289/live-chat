export default function Room(props: any) {
  console.log(props);
  return (
    <main className="w-full bg-white p-56 text-8xl">
      <div>
        {props.params.room}
        ddasdasd
      </div>
    </main>
  );
}
