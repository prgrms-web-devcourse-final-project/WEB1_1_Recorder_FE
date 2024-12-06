"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const { saveTokens } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // 환경 변수에서 URL 가져오기
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken && refreshToken) {
      handleLoginSuccess(accessToken, refreshToken);
    }
  }, []);

  const handleLoginSuccess = async (accessToken: string, refreshToken: string) => {
    try {
      const isFirstLogin = await saveTokens(accessToken, refreshToken);
      router.push(isFirstLogin ? "/onboarding" : "/");
    } catch (err) {
      setError("로그인 처리 중 오류가 발생했습니다.");
    }
  };

  const handleLogin = async (provider: string) => {
    try {
      const redirectUri = encodeURIComponent(`${BASE_URL}/login/oauth2/code/${provider}`);
      window.location.href = `${BASE_URL}/oauth2/authorization/${provider}?redirect_uri=${redirectUri}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : "로그인 중 오류가 발생했습니다.");
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
