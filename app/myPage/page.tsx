"use client";
import PageHeader from "@/components/pageHeader";
import MyInfoProfile from "@/components/mypage/myInfoProfile"

const MyPage = () => {
  return (
    <div className="m-auto my-10 max-w px-4 lg:px-20 h-screen">
      <PageHeader title="마이페이지" />
      <div className="mt-10">
        <div className="flex gap-6 border-b-2">
          <p className="text-24pt">나의 정보</p>
          <p className="text-24pt">나의 활동</p>
        </div>
        <div className="">
          <MyInfoProfile />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
