import ChatInput from "@/components/chat/chatInput";

type Props = {
  className: string;
};

const ChatDetail = ({ className }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <div></div>
      <div className="absolute bottom-4 w-full pr-8">
        <ChatInput className="h-24" />
      </div>
    </div>
  );
};

export default ChatDetail;
