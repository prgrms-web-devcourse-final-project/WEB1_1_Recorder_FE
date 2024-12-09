"use client";

import { Button } from "@/components/ui/button";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { useAuthStore } from "@/store/authStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

type Props = {};

const UserMenu = ({}: Props) => {
  const { isLogin, checkAuth } = useAuthStore();
  const pathname = usePathname();
  useEffect(() => {
    checkAuth();
  }, [checkAuth, pathname]);
  return (
    <>
      {isLogin ? (
        <div className="flex items-center gap-4">
          <FaBell size={30} className="cursor-pointer" />
          <Link href="/chat">
            <AiFillMessage size={30} className="cursor-pointer" />
          </Link>
          <Link className="flex items-center gap-2" href="/myPage">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
            </Avatar>
            <div>userName</div>
          </Link>
        </div>
      ) : (
        <Link href="/login">
          <Button variant="outline">로그인</Button>
        </Link>
      )}
    </>
  );
};

export default UserMenu;
