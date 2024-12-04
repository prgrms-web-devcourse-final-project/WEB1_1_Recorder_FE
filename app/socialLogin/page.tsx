import SocialLogin from "@/components/socialLogin/loginButton";
import LoginHeader from "@/components/socialLogin/loginHeader";
import Image from "next/image";

const socialLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center h-screen max-w-4xl w-full">
        <div className="w-[600px] p-[40px]">
          <LoginHeader />
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default socialLogin;
