"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import google from "@/public/img/google_img.png";
import kakao from "@/public/img/kakao_img.png";
import github from "@/public/img/github_grayimg.png";

type Props = {
  profileImage?: string;
  nickname?: string;
  businessEmail?: string;
  loginType?: string;
};

const MyInfoProfile = ({ profileImage, nickname, businessEmail, loginType }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col rounded-[10px] bg-secondary p-6">
      <div className="flex flex-col items-center justify-center">
        <Avatar className="h-40 w-40">
          <AvatarImage src={profileImage} className="h-40 w-40 rounded-full border-none bg-white" />
        </Avatar>
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Image src="/img/reward.png" alt="reward" width={30} height={30} />
            <p className="text-lg font-bold">{nickname}</p>
          </div>
          <p>{businessEmail}</p>
          <div className="flex items-center gap-2">
            <p>계정 연동</p>
            <Image
              src={loginType === "google" ? google : loginType === "kakao" ? kakao : github}
              alt="social"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className="mr-12 mt-4 flex justify-end">
        <Button size="edit" onClick={() => router.push("/myPage/edit")}>
          회원정보수정
        </Button>
      </div>
    </div>
  );
};

export default MyInfoProfile;
