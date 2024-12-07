"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    Cookies.remove("accessToken");
  }, []);
  return (
    <div className="flex h-[calc(100vh-320px)] w-full flex-col items-center justify-center">
      <div className="">로그아웃이 완료되었습니다.</div>{" "}
      <Button
        onClick={() => {
          router.push("/login");
        }}
      >
        로그인 페이지로 이동
      </Button>
    </div>
  );
};

export default Logout;
