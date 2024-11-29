"use client";
import { useState } from "react";
import ChatList from "@/components/chat/chatList";
import ChatDetail from "@/components/chat/chatDetail";

const Chat = () => {
  const users = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",
    "user11",
    "user12"
  ];
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
