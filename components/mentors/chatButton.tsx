"use client";

import { Button } from "@/components/ui/button";
import { deleteMentor } from "@/services/getMentorList";
import { getUserInfo } from "@/services/getUserInfo";
import { TUserInfo } from "@/types/userTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  nickName: string;
};

const ChatButton = ({ nickName }: Props) => {
  const router = useRouter();
  const [isDelete, setIsDelete] = useState(false);
  const [userInfo, setUserInfo] = useState<TUserInfo | null>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await deleteMentor();
    };
    if (isDelete) {
      fetchData();
      window.location.reload();
    }
  }, [isDelete]);

  if (userInfo?.nickname === nickName) {
    return (
      <Button className="mt-4 w-full text-white" type="submit" onClick={() => setIsDelete(true)}>
        삭제하기
      </Button>
    );
  } else {
    return (
      <Button className="mt-4 w-full text-white" type="submit" onClick={() => router.push("/chat")}>
        1:1 채팅하기
      </Button>
    );
  }
};
export { ChatButton };
