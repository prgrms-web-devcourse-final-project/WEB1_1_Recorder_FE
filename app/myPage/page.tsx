"use client";
import PageHeader from "@/components/pageHeader";
import MyInfoProfile from "@/components/mypage/myInfo/myInfoProfile";
import MyPageTop from "@/components/mypage/myInfo/myPageTop";
import MyChallengeTop from "@/components/mypage/myInfo/myChallengeTop";
import MyChallenge from "@/components/mypage/myInfo/myChallenge";
import MyStackTop from "@/components/mypage/myInfo/myStackTop";
import MyStack from "@/components/mypage/myInfo/myStack";

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
