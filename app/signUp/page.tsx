import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type Props = object;

const signUp = ({}: Props) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-screen w-full max-w-4xl flex-col items-center justify-center">
        <div className="relative w-[600px] p-[40px]">
          <div className="flex flex-col items-center gap-[30px]">
            <Image src="/svg/logo.svg" alt="logo" width={300} height={100} />
            <p className="text-[48px] font-extrabold">Sign Up</p>
            <div className="relative flex items-start">
              <Avatar className="h-40 w-40">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="h-40 w-40 rounded-full border-none bg-white"
                />
              </Avatar>
              <Image src="/img/upload.png" alt="logo" width={50} height={100} className="absolute right-[-10%] bottom-[-5%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp;
