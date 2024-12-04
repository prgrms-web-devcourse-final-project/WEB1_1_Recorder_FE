import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // 초기화 및 리스너 등록
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // 리스너 정리
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}
