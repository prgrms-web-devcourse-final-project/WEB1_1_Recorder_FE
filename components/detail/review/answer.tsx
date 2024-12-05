"use client";
import CodeViewer from "@/components/codeViewer";
import { Separator } from "@/components/separator";
import TextViewer from "@/components/textEditor/textViewer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import VoteMenu from "@/components/voteMenu";
import { cn } from "@/lib/utils";
import acceptAnswer from "@/services/acceptAnswer";
import { TAnswer } from "@/types/reviewTypes";
import { RxCheckCircled } from "react-icons/rx";
import { useRouter } from "next/navigation";
type Props = {
  answer: TAnswer;
  postId: number;
};
const AnswerDetail = ({ answer, postId }: Props) => {
  const router = useRouter();
  const handleClick = async () => {
    await acceptAnswer({ questionId: postId, answerId: answer.id, review: "EASY" });
    router.refresh();
  };
  return (
    <div className="flex items-start gap-5 p-5 pr-[60px]">
      <VoteMenu
        className="sticky top-20"
        answerId={answer.id}
        goodCount={answer.goodCount}
        badCount={answer.badCount}
      />
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>{answer.writer}</span>
            <Separator />
            <span>{answer.createdAt}</span>
          </div>
          <RxCheckCircled
            size={50}
            onClick={handleClick}
            className={cn(
              "cursor-pointer text-primary opacity-20 transition-opacity hover:opacity-100",
              answer.isAccept && "opacity-100"
            )}
          />
        </div>
        <div className="flex flex-col p-5">
          <CodeViewer code={answer.code} language="javascript" />
          <TextViewer markdown={answer.content} />
        </div>
      </div>
    </div>
  );
};

export default AnswerDetail;
