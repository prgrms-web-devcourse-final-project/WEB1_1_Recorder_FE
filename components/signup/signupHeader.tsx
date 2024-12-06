import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

type Props = object;

const SignupHeader = ({}: Props) => {
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
    <div className="flex flex-col items-center gap-[30px]">
      <p className="text-[48px] font-extrabold">Sign Up</p>
      <div className="relative flex items-start">
        <Avatar className="h-40 w-40">
          <AvatarImage src={avatarUrl} className="h-40 w-40 rounded-full border-none bg-white" />
        </Avatar>
        <Image
          src="/img/upload.png"
          alt="Upload Icon"
          width={50}
          height={100}
          className="absolute bottom-[-5%] right-[-10%] cursor-pointer"
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
    </div>
  );
};

export default SignupHeader;
