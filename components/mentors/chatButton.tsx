"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ChatButton = () => {
  const router = useRouter();
  return (
    <Button className="mt-4 w-full text-white" type="submit" onClick={() => router.push("/chat")}>
      1:1 채팅 하기
    </Button>
  );
};
export { ChatButton };
