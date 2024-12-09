"use client";
import Cookies from "js-cookie";
import ChatBubble from "@/components/chat/chatBubble";
import ChatInput from "@/components/chat/chatInput";
import { useEffect, useRef, useState } from "react";
import { Client, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

type Props = {
  id: string;
  className: string;
};

const ChatDetail = ({ id, className }: Props) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    const headers = { Authorization: token };

    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws/chat`);
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      headers,
      (frame: any) => {
        console.log("소켓 연결 성공", frame);
        stompClient.subscribe(`/topic/chat/${id}`, (message) => {
          const body = JSON.parse(message.body);
          setMessages((prev) => [...prev, body]);
        });
      },
      (error: any) => {
        console.log("연결실패");
        console.log(error);
      }
    );

    setClient(stompClient);

    return () => stompClient.deactivate();
  }, []);

  const sendMessage = (message: string) => {
    if (client?.connected) {
      client.publish({
        destination: `/app/chat.sendMessage/${id}`,
        body: message
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* <div className="flex h-full flex-col-reverse items-end pb-28">
        {messageList.map((message, i) => {
          return <ChatBubble key={i}>{message}</ChatBubble>;
        })}
      </div>
      <div className="absolute bottom-4 w-full pr-8">
        <ChatInput className="h-24" state={messageList} setState={setMessageList} ref={messageRef} />
      </div>
      <button onClick={() => sendMessage("안녕")}>보내기</button> */}
    </div>
  );
};

export default ChatDetail;
