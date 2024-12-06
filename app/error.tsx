"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="relative h-screen">
      <div className="absolute left-1/2 top-10 -translate-x-1/2 text-center">
        <div className="text-7xl text-primary">404 Error</div>
        <p className="mb-10 mt-4">예기치 못한 오류가 발생했습니다.</p>
        <Button onClick={() => window.location.reload()}>다시 시도하기</Button>
      </div>
    </div>
  );
}
