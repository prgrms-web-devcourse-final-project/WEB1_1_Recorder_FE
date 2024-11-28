import Image from "next/image";

type Props = object;

const SocialLogin = ({}: Props) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <button className="flex items-center gap-[20px] w-full bg-[#FEE500] text-black p-[20px] rounded-xl hover:bg-yellow-500 transition">
          <Image className="ml-32"src="/img/kakao_img.png" alt="KakaoIcon" width={30} height={30} />
          <span>Login with KaKao</span>
        </button>
      </div>
      <div>
        <button className="flex items-center gap-[20px] w-full text-black p-[18px] border-2 border-slate-600 rounded-xl transition">
          <Image className="ml-32"src="/img/google_img.png" alt="githubIcon" width={30} height={28} />
          <span>Login with Google</span>
        </button>
      </div>
      <div>
        <button className="flex items-center gap-[20px] w-full bg-black text-white p-[20px] rounded-xl hover:bg-[#0d1117] transition">
          <Image className="ml-32"src="/img/github_grayimg.png" alt="githubIcon" width={30} height={30} />
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
