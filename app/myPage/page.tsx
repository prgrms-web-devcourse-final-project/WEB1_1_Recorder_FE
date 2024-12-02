"use client";
import PageHeader from "@/components/pageHeader";
import MyInfoProfile from "@/components/mypage/myInfoProfile";
import MyPageTop from "@/components/mypage/myPageTop";
import MyChallengeTop from "@/components/mypage/myChallengeTop";
import MyChallenge from "@/components/mypage/myChallenge";
import MyStackTop from "@/components/mypage/myStackTop";
import MyStack from "@/components/mypage/myStack";

const MyPage = () => {
  return (
    <div className="m-auto my-10 h-full max-w px-4 lg:px-20">
      <PageHeader title="마이페이지" />
      <div className="mt-10">
        <MyPageTop />
        <MyInfoProfile />
        <MyChallengeTop />
        <MyChallenge />
        <MyStackTop />
        <MyStack />
      </div>
    </div>
  );
};

export default MyPage;
