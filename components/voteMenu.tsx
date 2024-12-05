"use client";
import { cn } from "@/lib/utils";
import { PiThumbsDownThin, PiThumbsUpThin } from "react-icons/pi";

type Props = {
  answerId: number;
  goodCount: number;
  badCount: number;
  className?: string;
};

const VoteMenu = ({ answerId, goodCount, badCount, className }: Props) => {
  // 추후 기능 추가 예정
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <PiThumbsUpThin size={40} />
      <div className="flex flex-col">
        <div className="flex h-10 w-10 items-center justify-center rounded-tl-md rounded-tr-md border-2 border-b-[1px] border-ring">
          {goodCount}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-bl-md rounded-br-md border-2 border-t-[1px] border-ring">
          {badCount}
        </div>
      </div>
      <PiThumbsDownThin size={40} />
    </div>
  );
};

export default VoteMenu;
