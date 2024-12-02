"use client";
import PageHeader from "@/components/pageHeader";
import MyInfoProfile from "@/components/mypage/myInfoProfile"
import MyPageTop from "@/components/mypage/myPageTop";
import MyChallengeTop from "@/components/mypage/myChallengeTop"
import MyChallenge from "@/components/mypage/myChallenge";

const MyPage = () => {
  return (
    <div className="m-auto my-10 max-w px-4 lg:px-20 h-screen">
      <PageHeader title="마이페이지" />
      <div className="mt-10">
        <MyPageTop />
        <div className="">
          <MyInfoProfile />
        </div>
        <MyChallengeTop />
        <MyChallenge />
      </div>
    </div>
  );
};

export default MyPage;
