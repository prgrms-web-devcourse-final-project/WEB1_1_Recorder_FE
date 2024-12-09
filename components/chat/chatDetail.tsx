"use client";
import Cookies from "js-cookie";
import ChatBubble from "@/components/chat/chatBubble";
import ChatInput from "@/components/chat/chatInput";
import { useEffect, useState } from "react";
import { Client, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { TChatRecord } from "@/types/chatTypes";

type Props = {
  roomId: string;
  userId: string;
  chatList: TChatRecord[];
  className: string;
};

type Message = { content: string; authorization: string; type: "CHAT"; senderId: string };

const ChatDetail = ({ roomId, chatList, userId, className }: Props) => {
  console.log(roomId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [client, setClient] = useState<Client | null>(null);
  const [input, setInput] = useState("");
  const [sendInput, setSendInput] = useState("");
  console.log(messages);
  useEffect(() => {
    const token = Cookies.get("accessToken");
    const headers = { Authorization: token };
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws/chat`);
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      headers,
      (frame: any) => {
        console.log("소켓 연결 성공", frame);
        stompClient.subscribe(`/topic/chat/${1}`, (message) => {
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
        destination: `/app/chat.sendMessage/${roomId}`,
        body: message
      });
    }
  };

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      const message = { content: sendInput, authorization: `Bearer ${token}`, type: "CHAT", senderId: userId };
      sendMessage(JSON.stringify(message));
    }
  }, [sendInput]);

  return (
    <div className={`${className}`}>
      <div className="flex w-full flex-col justify-end overflow-y-auto">
        {chatList.map((message, i) => {
          return (
            <ChatBubble
              key={i}
              sort={message.sender === userId ? "end" : "start"}
              className={message.sender === userId ? `bg-primary text-white` : `bg-secondary align-top`}
            >
              {message.content}
            </ChatBubble>
          );
        })}
        {messages.map((message, i) => {
          return (
            <ChatBubble
              key={i}
              sort={message.senderId !== userId ? "end" : "start"}
              className={message.senderId !== userId ? `bg-primary text-white` : `bg-secondary`}
            >
              {message.content}
            </ChatBubble>
          );
        })}
      </div>
      <div>
        <ChatInput className="h-24" state={input} setState={setInput} setSendInput={setSendInput} />
      </div>
    </div>
  );
};

export default ChatDetail;
