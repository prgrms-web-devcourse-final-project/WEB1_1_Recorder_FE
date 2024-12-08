"use client";
import { useState } from "react";
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

const MyPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("info");

  const renderContent = () => {
    if (activeTab === "info") {
      return (
        <>
          <MyInfoProfile />
          <MyChallengeTop />
          <MyChallenge />
          <MyStackTop />
          <MyStack />
        </>
      );
    }
    if (activeTab === "questions") {
      return (
        <>
          <MyQuestion />
        </>
      );
    }
  };

  return (
    <div className="m-auto my-10 h-full max-w px-4 lg:px-20">
      <PageHeader title="마이페이지" />
      <div className="flex flex-col gap-8">
        <MyPageTop activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
        <Button
          onClick={() => {
            router.push("/logout");
          }}
        >
          임시 로그아웃 버튼
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
