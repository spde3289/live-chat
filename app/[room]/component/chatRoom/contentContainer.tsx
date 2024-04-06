import ChatHistory from "./chatHistory";

export default function ContentContainer(props: any) {
  return (
    <>
      <div className="flex h-[655px] flex-col will-change-scroll p-5 overflow-y-scroll">
        <ChatHistory userType="me" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
        <ChatHistory userType="other" />
      </div>
    </>
  );
}
