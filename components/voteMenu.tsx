"use client";
import { cn } from "@/lib/utils";
import addHeart from "@/services/addHeart";
import getHeartCount from "@/services/getHeartCount";
import getHeartStatus from "@/services/getHeartStatus";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PiThumbsDownThin, PiThumbsUpThin } from "react-icons/pi";

type Props = {
  answerId: number;
  className?: string;
};

const VoteMenu = ({ answerId, className }: Props) => {
  const heartCount = useQuery({ queryKey: ["heartCount", { answerId }], queryFn: () => getHeartCount(answerId) });
  const heartStatus = useQuery({ queryKey: ["heartStatus", { answerId }], queryFn: () => getHeartStatus(answerId) });

  const mutation = useMutation({
    mutationFn: (isGood: boolean) => {
      if (heartStatus.data) {
        return addHeart({
          answerId,
          isGood,
          isAdd: isGood
            ? heartStatus.data.result.isGood === true
              ? false
              : true
            : heartStatus.data.result.isBad === true
              ? false
              : true
        });
      }
      return Promise.resolve({ message: "", result: { goodCount: 0, badCount: 0 } });
    },
    onSuccess: () => {
      heartCount.refetch();
      heartStatus.refetch();
    }
  });
  const handleClick = (isGood: boolean) => {
    mutation.mutate(isGood);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <PiThumbsUpThin
        size={40}
        onClick={() => {
          handleClick(true);
        }}
        className={cn(
          "cursor-pointer transition-colors hover:text-primary",
          heartStatus.data?.result.isGood && "text-primary"
        )}
      />
      <div className="flex flex-col">
        <div
          onClick={() => {
            handleClick(true);
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-tl-md rounded-tr-md border-2 border-b-[1px] border-ring transition-colors hover:text-primary"
        >
          {heartCount.data?.result.goodCount}
        </div>
        <div
          onClick={() => {
            handleClick(false);
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-md rounded-br-md border-2 border-t-[1px] border-ring transition-colors hover:text-primary"
        >
          {heartCount.data?.result.badCount}
        </div>
      </div>
      <PiThumbsDownThin
        size={40}
        onClick={() => {
          handleClick(false);
        }}
        className={cn(
          "cursor-pointer transition-colors hover:text-primary",
          heartStatus.data?.result.isBad && "text-primary"
        )}
      />
    </div>
  );
};

export default VoteMenu;
