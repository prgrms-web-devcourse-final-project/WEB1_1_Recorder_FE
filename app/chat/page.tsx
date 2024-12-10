"use client";
import ChatList from "@/components/chat/chatList";
import ChatDetail from "@/components/chat/chatDetail";
import { getUserChatList } from "@/services/getUserChatLsit";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ChatListItem } from "@/types/chatTypes";
import { getChatId, getChatRecord } from "@/services/chat";
import { TChatRecord } from "@/types/chatTypes";

const Chat = () => {
  const params = useSearchParams();
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const { isLogin, checkAuth } = useAuthStore();
  const [userList, setUserList] = useState<ChatListItem[]>([]);
  const [roomId, setRoomId] = useState<string | null>();
  const [chatList, setchatList] = useState<TChatRecord[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserChatList();
      setUserList(data);
    };
    checkAuth();
    fetchData();
  }, []);

  useEffect(() => {
    const getChat = async (id: string) => {
      const data = await getChatId({ opponentId: id });
      setRoomId(data?.result.toString() || null);
      const record = await getChatRecord({ id: data?.result.toString() || "", query: { size: "50" } });
      setchatList(record?.result || []);
      const list = await getUserChatList();
      setUserList(list);
    };
    const searchParams = new URLSearchParams(params);
    const id = searchParams.get("opponentId");
    if (id) {
      getChat(id);
      setUserId(id);
    }
  }, [params]);

  return (
    <>
      {isLogin ? (
        <div className="m-auto my-10 flex max-w justify-center gap-4 px-4">
          <ChatList list={userList} className={`rounded-md border p-4 ${roomId ? "w-1/3" : "h-screen w-full"}`} />
          {roomId && (
            <ChatDetail roomId={roomId} userId={userId} chatList={chatList} className="w-2/3 rounded-md border p-4" />
          )}
        </div>
      ) : (
        <div className="my-32 flex flex-col items-center">
          <p className="py-10 text-xl">채팅은 로그인 시 이용가능합니다</p>
          <Button onClick={() => router.push("/login")}>로그인하러 가기</Button>
        </div>
      )}
    </>
  );
};
export default Chat;
