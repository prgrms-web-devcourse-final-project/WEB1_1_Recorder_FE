"use client";
import ChatList from "@/components/chat/chatList";
import ChatDetail from "@/components/chat/chatDetail";
import { getUserChatList } from "@/services/getUserChatLsit";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ChatListItem } from "@/types/chatTypes";
import { getChatId } from "@/services/chat";

const Chat = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { isLogin, checkAuth } = useAuthStore();
  const [userList, setUserList] = useState<ChatListItem[]>([]);
  const [roomId, setRoomId] = useState<string | null>();

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
    };
    const searchParams = new URLSearchParams(params);
    const id = searchParams.get("opponentId");
    if (id) {
      getChat(id);
    }
  }, [params]);

  return (
    <>
      {isLogin ? (
        <div className="m-auto my-10 flex max-w justify-center gap-4 px-4">
          {userList.length > 1 ? (
            <p className="my-32 text-center text-xl">아직 채팅 내역이 없습니다.</p>
          ) : (
            <>
              <ChatList list={userList} className="h-screen w-1/3 rounded-md border p-4" />
              {roomId && <ChatDetail id={roomId} className="h-screen w-2/3 rounded-md border p-4" />}
            </>
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
