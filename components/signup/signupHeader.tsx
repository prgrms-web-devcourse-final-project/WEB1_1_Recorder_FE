import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

type Props = object;

const signupHeader = ({}: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 업로드 창 열기
    }
  };

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <Image src="/svg/logo.svg" alt="logo" width={300} height={100} />
      <p className="text-[48px] font-extrabold">Sign Up</p>
      <div className="relative flex items-start">
        <Avatar className="h-40 w-40">
          <AvatarImage src="https://github.com/shadcn.png" className="h-40 w-40 rounded-full border-none bg-white" />
        </Avatar>
        <Image
          src="/img/upload.png"
          alt="Upload Icon"
          width={50}
          height={100}
          className="absolute bottom-[-5%] right-[-10%] cursor-pointer"
          onClick={handleImageClick}
        />
        <Input id="picture" type="file" className="hidden" ref={fileInputRef} />
      </div>
    </div>
  );
};

export default signupHeader;
