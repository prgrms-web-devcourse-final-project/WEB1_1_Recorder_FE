type Props = {
  children: string;
};

const ChatBubble = ({ children }: Props) => {
  return <div className="my-1 w-fit rounded-2xl bg-secondary px-4 py-1">{children}</div>;
};

export default ChatBubble;
