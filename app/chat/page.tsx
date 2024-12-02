"use client";
import ChatList from "@/components/chat/chatList";
import ChatDetail from "@/components/chat/chatDetail";
import { users } from "@/constants/user";
import { useState } from "react";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState("");
  return (
    <main className="m-auto my-10 flex max-w gap-4 px-4">
      <ChatList
        list={users}
        state={selectedUser}
        setState={setSelectedUser}
        className="h-screen w-1/3 rounded-md border p-4"
      />
      <ChatDetail className="h-screen w-2/3 rounded-md border p-4" />
    </main>
  );
};
export default Chat;
