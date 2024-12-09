import Image from "next/image";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = object;

const myEditMember = ({}: Props) => {
  const router = useRouter();
  const [linkedStatus, setLinkedStatus] = useState({
    github: false,
    google: false,
    kakao: false,
  });

  const handleButtonClick = (key: keyof typeof linkedStatus) => {
    setLinkedStatus((prevStatus) => ({
      ...prevStatus,
      [key]: !prevStatus[key],
    }));
  };

  return (
    <div className="flex flex-col">
      <div className="mt-10 flex items-start p-2">
        <Label htmlFor="Nickname">Nickname</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="Nickname" placeholder="Nickname" className="w-full" />
      </div>

      <div className="mt-5 flex items-start p-2">
        <Label htmlFor="Nickname">Introduction</Label>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="text" placeholder="Content" className="h-40 w-full" />
      </div>

      <div className="mt-5 flex items-start p-2">
        <Label htmlFor="SocialLogin">Social Login</Label>
      </div>

      {/* GitHub */}
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-4">
          <Image src="/img/github_grayimg.png" alt="GitHub Icon" width={50} height={100} />
          <p>github</p>
        </div>
        <Button
          className={`${
            linkedStatus.github ? "bg-white text-black" : "bg-btnColor text-white"
          }`}
          onClick={() => handleButtonClick("github")}
        >
          {linkedStatus.github ? "연동해제" : "연동하기"}
        </Button>
      </div>

      {/* Google */}
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-4">
          <Image src="/img/google_img.png" alt="Google Icon" width={50} height={100} />
          <p>google</p>
        </div>
        <Button
          className={`${
            linkedStatus.google ? "bg-white text-black" : "bg-btnColor text-white"
          }`}
          onClick={() => handleButtonClick("google")}
        >
          {linkedStatus.google ? "연동해제" : "연동하기"}
        </Button>
      </div>

      {/* Kakao */}
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-4">
          <Image src="/img/kakao_img.png" alt="Kakao Icon" width={50} height={100} />
          <p>kakao</p>
        </div>
        <Button
          className={`${
            linkedStatus.kakao ? "bg-white text-black" : "bg-btnColor text-white"
          }`}
          onClick={() => handleButtonClick("kakao")}
        >
          {linkedStatus.kakao ? "연동해제" : "연동하기"}
        </Button>
      </div>

      <Button className="mt-5 bg-btnColor p-6 text-white" onClick={() => router.push("/myPage")}>
        회원정보 수정
      </Button>
    </div>
  );
};

export default myEditMember;
