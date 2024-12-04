import Image from "next/image";
import { Button } from "@/components/ui/button";
type Props = object;

const LoginButton = ({}: Props) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <Button size="kakao" className="flex items-center bg-[#FEE500] text-black hover:bg-yellow-500 transition">
          <Image src="/img/kakao_img.png" alt="KakaoIcon" width={30} height={30} />
          <span>Login with KaKao</span>
        </Button>
      </div>
      <div>
        <Button variant="outline" size="google" className="flex items-center text-black border-2 border-slate-600 rounded-xl transition">
          <Image src="/img/google_img.png" alt="githubIcon" width={30} height={28} />
          <span>Login with Google</span>
        </Button>
      </div>
      <div>
        <Button size="github" className="flex items-center bg-black text-white hover:bg-[#0d1117] transition">
          <Image src="/img/github_grayimg.png" alt="githubIcon" width={30} height={30} />
          <span>Login with Github</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginButton;
