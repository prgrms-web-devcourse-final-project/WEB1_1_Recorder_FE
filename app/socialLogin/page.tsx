import SocialLogin from "@/components/socialLogin/login";
import Image from "next/image";

const socialLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center h-screen max-w-4xl w-full">
        <div className="w-[600px] p-[40px]">
          <div className="flex flex-col items-center gap-[100px]">
            <Image src="/img/logo.png" alt="logo" width={300} height={100}/>
            <p className="text-[18px] mb-[100px]">Join our platform today</p>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default socialLogin;
