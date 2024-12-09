// lib/useCheckAuth.ts
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useCheckAuth = () => {
  const [isLogin, setIsLogin] = useState(() => {
    // 초기값을 함수로 설정하여 첫 렌더링때만 실행
    return Boolean(Cookies.get("accessToken"));
  });

  useEffect(() => {
    // 쿠키 변경 감지
    const checkAuth = () => {
      const hasToken = Boolean(Cookies.get("accessToken"));
      if (hasToken !== isLogin) {
        setIsLogin(hasToken);
      }
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, [isLogin]);

  return [isLogin, setIsLogin] as const;
};

export default useCheckAuth;
