import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type Props = {
  className?: string;
};

const ChatList = ({ className }: Props) => {
  const users = ["user1", "user2", "user3"];
  return (
    <ScrollArea className={className}>
      <h3>목록</h3>
      {users.map((user, i) => {
        return (
          <div key={i}>
            <p>{user}</p>
            <Separator />
          </div>
        );
      })}
    </ScrollArea>
  );
};

export default ChatList;
