"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChatListItem } from "@/types/chatTypes";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  list: ChatListItem[];
  className?: string;
};

const ChatList = ({ list, className }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const currentUser = params.get("user") || "";
  console.log(list);
  return (
    <ScrollArea className={className}>
      <h3 className="pb-4 font-bold">목록</h3>
      {list.length < 1 ? (
        <div className="flex justify-center text-gray-500">
          <p>아직 채팅 기록이 없습니다.</p>
        </div>
      ) : (
        list.map((user, i) => {
          return (
            <div key={i}>
              <p
                className={`cursor-pointer rounded-md p-3 hover:bg-secondary ${+currentUser === user.opponentId && "bg-secondary"}`}
                onClick={() => {
                  router.push(`/chat?user=${user.opponentId}`);
                }}
              >
                {user.opponentId}
              </p>
              <Separator />
            </div>
          );
        })
      )}
    </ScrollArea>
  );
};

export default ChatList;
