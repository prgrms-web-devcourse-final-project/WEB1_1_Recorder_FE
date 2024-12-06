"use client";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="relative h-screen">
      <div className="absolute left-1/2 top-10 -translate-x-1/2 text-center">
        <div className="text-7xl text-primary">404 Not Found</div>
        <p className="mb-10 mt-4">찾으시는 페이지가 없습니다.</p>
        <Button onClick={() => (window.location.href = "/")}>메인페이지로 이동하기</Button>
      </div>
    </div>
  );
}
