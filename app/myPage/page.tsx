"use client";
import { useEffect, useState } from "react";
import PageHeader from "@/components/pageHeader";
import MyInfoProfile from "@/components/mypage/myInfo/myInfoProfile";
import MyPageTop from "@/components/mypage/myInfo/myPageTop";
import MyChallengeTop from "@/components/mypage/myInfo/myChallengeTop";
import MyChallenge from "@/components/mypage/myInfo/myChallenge";
import MyStackTop from "@/components/mypage/myInfo/myStackTop";
import MyStack from "@/components/mypage/myInfo/myStack";
import MyQuestion from "@/components/mypage/myActivity/myQuestion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { TUserInfo } from "@/types/userTypes";
import { getUserInfo } from "@/services/getUserInfo";
import { getSimpleAchievement } from "@/services/getSimpleAchievement";
import { getUserTechs } from "@/services/getUserTechs";

const MyPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("info");
  const { isLogin } = useAuthStore();

  const [userInfo, setUserInfo] = useState<TUserInfo | null>();
  const [achive, setAchive] = useState<{ total: number; achieved: number } | null>(null);
  const [userTechs, setUserTechs] = useState<
    | {
        id: number;
        name: string;
      }[]
    | []
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
      const achive = await getSimpleAchievement();
      setAchive(achive);
      const tech = await getUserTechs();
      setUserTechs(tech);
    };
    fetchData();
  }, []);

  return (
    <div className="m-auto max-w p-10">
      {isLogin ? (
        <>
          <PageHeader title="마이페이지" />
          <div className="flex flex-col gap-8">
            <MyPageTop activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "info" ? (
              <>
                <MyInfoProfile {...userInfo} />
                <MyChallengeTop />
                <MyChallenge achivement={achive} />
                <MyStackTop />
                <MyStack userTechs={userTechs} />
              </>
            ) : (
              <MyQuestion />
            )}
          </div>
        </>
      ) : (
        <div className="my-32 flex flex-col items-center">
          <p className="py-10 text-xl">마이페이지는 로그인 시 이용가능합니다</p>
          <Button onClick={() => router.push("/login")}>로그인하러 가기</Button>
        </div>
      )}
    </div>
  );
};

export default MyPage;
