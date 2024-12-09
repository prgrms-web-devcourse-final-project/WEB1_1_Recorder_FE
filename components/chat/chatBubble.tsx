type Props = {
  children: string;
  sort: "start" | "end";
  className: string;
};

const ChatBubble = ({ children, sort, className }: Props) => {
  return (
    <div className={`flex w-full ${sort === "end" ? "justify-end" : ""}`}>
      <div className={`my-1 w-fit rounded-2xl px-4 py-1 ${className}`}> {children}</div>
    </div>
  );
};

export default ChatBubble;
