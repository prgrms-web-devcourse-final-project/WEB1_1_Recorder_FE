"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginButton = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (provider: string) => {
    try {
      // 백엔드 서버의 소셜 로그인 엔드포인트로 직접 리다이렉트
      if (provider === 'google') {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
      } else if (provider === 'kakao') {
        window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
      } else if (provider === 'github') {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "로그인 중 오류가 발생했습니다");
    }
  };

  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <Button 
          size="kakao" 
          className="flex items-center bg-[#FEE500] text-black hover:bg-yellow-500 transition"
          onClick={() => handleLogin("kakao")}
        >
          <Image src="/img/kakao_img.png" alt="KakaoIcon" width={30} height={30} />
          <span>Login with KaKao</span>
        </Button>
      </div>
      <div>
        <Button 
          variant="outline" 
          size="google" 
          className="flex items-center text-black border-2 border-slate-600 rounded-xl transition"
          onClick={() => handleLogin("google")}
        >
          <Image src="/img/google_img.png" alt="googleIcon" width={30} height={28} />
          <span>Login with Google</span>
        </Button>
      </div>
      <div>
        <Button 
          size="github" 
          className="flex items-center bg-black text-white hover:bg-[#0d1117] transition"
          onClick={() => handleLogin("github")}
        >
          <Image src="/img/github_grayimg.png" alt="githubIcon" width={30} height={30} />
          <span>Login with Github</span>
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default LoginButton;
