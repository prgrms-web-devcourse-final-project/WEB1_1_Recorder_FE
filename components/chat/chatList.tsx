import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React, { SetStateAction } from "react";

type Props = {
  list: string[];
  state: string;
  setState: React.Dispatch<SetStateAction<string>>;
  className?: string;
};

const ChatList = ({ list, state, setState, className }: Props) => {
  return (
    <ScrollArea className={className}>
      <h3 className="pb-4 font-bold">목록</h3>
      {list.map((user, i) => {
        return (
          <div key={i}>
            <p
              className={`cursor-pointer rounded-md p-3 hover:bg-secondary ${state === user && "bg-secondary"}`}
              onClick={() => {
                setState(user);
              }}
            >
              {user}
            </p>
            <Separator />
          </div>
        );
      })}
    </ScrollArea>
  );
};

export default ChatList;
