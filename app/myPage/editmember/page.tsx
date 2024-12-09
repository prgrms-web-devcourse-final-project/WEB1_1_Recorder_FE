"use client"
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import EditMemberMain from "@/components/mypage/myEditMember/EditMemberMain";
import PageHeader from "@/components/pageHeader";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

type Props = object;

const EditMember = ({}: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>("https://github.com/shadcn.png");

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  return (
    <div className="m-auto my-10 h-full max-w px-4 lg:px-20">
      <PageHeader title="마이페이지" />
      <p className="text-24pt mt-10 cursor-pointer border-b-2">회원 정보 수정</p>
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-screen w-full max-w-4xl flex-col items-center justify-center">
          <div className="relative w-[600px] p-[40px]">
            <div className="relative flex justify-center items-center">
              <Avatar className="h-40 w-40">
                <AvatarImage
                  src={avatarUrl}
                  className="h-40 w-40 rounded-full border-none bg-white"
                />
              </Avatar>
              <Image
                src="/img/upload.png"
                alt="Upload Icon"
                width={50}
                height={100}
                className="absolute bottom-[0%] right-[33%] cursor-pointer"
                onClick={handleImageClick}
              />
              <Input
                id="picture"
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            <EditMemberMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMember;
