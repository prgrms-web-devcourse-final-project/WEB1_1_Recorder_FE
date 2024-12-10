"use client";
import Cookies from "js-cookie";
import ChatBubble from "@/components/chat/chatBubble";
import ChatInput from "@/components/chat/chatInput";
import { Message, TChatRecord } from "@/types/chatTypes";
import { useEffect, useState } from "react";
import { Client, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  roomId: string;
  userId: string;
  chatList: TChatRecord[];
  className: string;
};

const ChatDetail = ({ roomId, chatList, userId, className }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [client, setClient] = useState<Client | null>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    const token = Cookies.get("accessToken");
    const headers = { Authorization: `Bearer ${token}` };
    const socket = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws/chat`);
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      headers,
      (frame: any) => {
        stompClient.subscribe(`/topic/chat/${roomId}`, (message) => {
          const body = JSON.parse(message.body);
          setMessages((prev) => [...prev, body]);
        });
      },
      (error: any) => {
        console.log(error);
      }
    );

    setClient(stompClient);
    return () => {
      stompClient.deactivate();
    };
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
    if (token && input.trim().length > 0) {
      const message = { content: input, authorization: `Bearer ${token}`, type: "CHAT", senderId: userId };
      sendMessage(JSON.stringify(message));
    }
    setInput("");
  }, [input]);

  return (
    <div className={`${className}`}>
      <ScrollArea className="flex h-[600px] flex-col justify-end">
        {chatList.map((message, i) => {
          return (
            <ChatBubble
              key={i}
              sort={message.sender !== userId ? "end" : "start"}
              className={message.sender !== userId ? `bg-primary text-white` : `bg-secondary align-top`}
            >
              {message.content}
            </ChatBubble>
          );
        })}
        {messages.map((message, i) => {
          return (
            <ChatBubble
              key={i}
              sort={message.senderId.toString() === userId ? "end" : "start"}
              className={message.senderId.toString() === userId ? `bg-primary text-white` : `bg-secondary`}
            >
              {message.content}
            </ChatBubble>
          );
        })}
      </ScrollArea>
      <div>
        <ChatInput className="h-24" setState={setInput} />
      </div>
    </div>
  );
};

export default ChatDetail;
