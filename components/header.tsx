"use client";
import Image from "next/image";
import logo from "@/public/svg/logo.svg";
import { useRouter } from "next/navigation";
import SearchInput from "@/components/reviews/searchInput";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Cookies from "js-cookie";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [input, setInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const accessToken = Cookies.get("accessToken");
      setIsLogin(Boolean(accessToken));
    };
    checkAuth();
    const interval = setInterval(checkAuth, 1000);
    window.addEventListener("storage", checkAuth);
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);
  //임시 코드 추후수정예정
  return (
    <header className="fixed z-50 h-20 w-full bg-white shadow-md">
      <div className="m-auto flex max-w p-4">
        <div className="flex items-center gap-4">
          <h1 className="mr-4 cursor-pointer" onClick={() => router.push("/")}>
            <Image src={logo} alt="logo" width={150}></Image>
          </h1>
          <div className="cursor-pointer hover:text-primary" onClick={() => router.push("/reviews")}>
            코드리뷰
          </div>
          <div className="cursor-pointer hover:text-primary" onClick={() => router.push("/mentors")}>
            라이브 피드백
          </div>
        </div>
        <div className="grow"></div>
        <div className="hidden md:block">
          <div className="flex gap-2">
            <SearchInput setState={setInput}></SearchInput>

            {isLogin ? (
              <div className="ml-5 flex items-center gap-4">
                <FaBell size={30} className="cursor-pointer" />
                <AiFillMessage size={30} className="cursor-pointer" onClick={() => router.push("/chat")} />
                <div className="flex cursor-pointer items-center gap-2" onClick={() => router.push("/myPage")}>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
                  </Avatar>
                  <div>userName</div>
                </div>
              </div>
            ) : (
              <>
                <Button variant="outline" className="ml-5" onClick={() => router.push("/login")}>
                  로그인
                </Button>
                <Button variant="outline" className="ml-5" onClick={() => router.push("/signup")}>
                  회원가입
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
