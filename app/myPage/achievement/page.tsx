"use client";
import AchievementStatus from "@/components/mypage/myAchievement/AchievementStatus";
import ChangeModal from "@/components/mypage/myInfo/changeModal";
import PageHeader from "@/components/pageHeader";
import { Badge } from "@/components/ui/badge";
import { getUserInfo } from "@/services/getUserInfo";
import { TUserInfo } from "@/types/userTypes";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import Image from "next/image";
const Achievement = () => {
  const [userInfo, setUserInfo] = useState<TUserInfo | null>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
    };
    fetchData();
  }, []);

  return (
    <div className="m-auto max-w p-10">
      <PageHeader title="나의 업적" />
      <div className="mt-10 flex flex-col rounded-lg bg-secondary p-6">
        <div className="flex items-center justify-start gap-[50px] px-24 py-10">
          <Avatar className="h-40 w-40">
            <AvatarImage src={userInfo?.profileImage} className="h-40 w-40 rounded-full border-none bg-white" />
          </Avatar>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                {/* <Image src="/img/silver.png" alt="" width={20} height={20} /> */}
                <Badge className="px-2 py-1">
                  <Image src="/img/bronze.png" alt="" width={15} height={15} />
                  <span className="pl-2">누적 추천수</span>
                </Badge>
              </div>
              <ChangeModal />
            </div>
            <p className="text-[24px] font-bold">{userInfo?.nickname}</p>
          </div>
        </div>
      </div>
      <AchievementStatus />
    </div>
  );
};

export default Achievement;
