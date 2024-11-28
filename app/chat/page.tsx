import ChatList from "@/components/chat/chatList";

const Chat = () => {
  return (
    <main className="m-auto my-10 flex max-w px-4">
      <ChatList className="h-96 w-1/3 rounded-md border p-4" />
      <div className="w-2/3"></div>
    </main>
  );
};
export default Chat;
