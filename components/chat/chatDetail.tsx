"use client";
import ChatBubble from "@/components/chat/chatBubble";
import ChatInput from "@/components/chat/chatInput";
import { useRef, useState } from "react";

type Props = {
  className: string;
};

const ChatDetail = ({ className }: Props) => {
  const [messageList, setMessageList] = useState<string[]>([]);
  const messageRef = useRef<string>("");

  return (
    <div className={`relative ${className}`}>
      <div className="flex h-full flex-col-reverse items-end pb-28">
        {messageList.map((message, i) => {
          return <ChatBubble key={i}>{message}</ChatBubble>;
        })}
      </div>
      <div className="absolute bottom-4 w-full pr-8">
        <ChatInput className="h-24" state={messageList} setState={setMessageList} ref={messageRef} />
      </div>
    </div>
  );
};

export default ChatDetail;
