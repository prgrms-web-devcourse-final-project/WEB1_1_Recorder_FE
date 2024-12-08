import ChatList from "@/components/chat/chatList";
import ChatDetail from "@/components/chat/chatDetail";
import { getUserCharList } from "@/services/getUserChatLsit";

const Chat = async () => {
  const userList = await getUserCharList();
  console.log(userList);
  return (
    <div className="m-auto my-10 flex max-w gap-4 px-4">
      <ChatList list={userList} className="h-screen w-1/3 rounded-md border p-4" />
      <ChatDetail className="h-screen w-2/3 rounded-md border p-4" />
    </div>
  );
};
export default Chat;
