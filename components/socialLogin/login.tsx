"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import google from "@/public/img/google_img.png";
import kakao from "@/public/img/kakao_img.png";
import github from "@/public/img/github_grayimg.png";
import { useRouter } from "next/navigation";
type Props = {
  children: React.ReactNode;
  className: string;
  icon: StaticImageData;
  url: string;
};

const LoginButton = ({ icon, children, className, url }: Props) => {
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <button
      onClick={() => {
        handleClick(url);
      }}
      className={cn(
        "flex w-96 items-center justify-start rounded-xl border-2 border-transparent p-2 px-4 text-black transition",
        className
      )}
    >
      <Image src={icon} alt="githubIcon" width={25} />
      <div className="w-full">{children}</div>
    </button>
  );
};

const SocielLogin = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.origin : "";
  const loginUrl = `?redirect_uri=${encodeURIComponent(currentUrl)}/signUp`;

  const googleURL = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google${loginUrl}`;
  const kakaoURL = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao${loginUrl}`;
  const githubURL = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/github${loginUrl}`;

  return (
    <div className="flex w-fit flex-col gap-8">
      <LoginButton icon={google} className="border-slate-600" url={googleURL}>
        <span>Login with Google</span>
      </LoginButton>{" "}
      <LoginButton icon={kakao} className="bg-[#FEE500]" url={kakaoURL}>
        <span>Login with KaKao</span>
      </LoginButton>
      <LoginButton icon={github} className="bg-black text-white" url={githubURL}>
        <span>Login with Github</span>
      </LoginButton>
    </div>
  );
};
export default SocielLogin;
