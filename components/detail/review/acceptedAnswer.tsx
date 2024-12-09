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
import { Button } from "@/components/ui/button";
import getMyInfo from "@/services/getMyInfo";
import { useMutation, useQuery } from "@tanstack/react-query";
import deleteAnswer from "@/services/deleteAnswer";
type Props = {
  answer: TAnswer;
  postId: number;
};
const AcceptedAnswerDetail = ({ answer, postId }: Props) => {
  const router = useRouter();
  const handleClick = async () => {
    await acceptAnswer({ questionId: postId, answerId: answer.id, review: "EASY" });
    router.refresh();
  };
  const { data } = useQuery({ queryKey: ["getMyInfo"], queryFn: getMyInfo });
  const mutation = useMutation({
    mutationFn: () => deleteAnswer(answer.id)
  });
  const handleDelete = () => {
    mutation.mutate();
    router.push(`/detail/review/${postId}`);
  };
  return (
    <div className="flex items-start gap-5 border-l-8 border-primary p-5 pr-[60px]">
      <VoteMenu className="sticky top-20" answerId={answer.id} />
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Avatar>
              <AvatarImage src={answer.profileImage || ""} />
              <AvatarFallback>{answer.writer[0]}</AvatarFallback>
            </Avatar>
            <span>{answer.writer}</span>
            <Separator />
            <span>{answer.createdAt.split("T")[0]}</span>
            <Separator />
            <span>
              작성한 답변 <span className="text-primary">{answer.totalAnswerCount}</span>개
            </span>
            <Separator />
            <span>
              채택률 <span className="text-primary">{answer.adoptedRate}</span>%
            </span>
            <Separator />
          </div>
          <RxCheckCircled size={50} onClick={handleClick} className={cn("cursor-pointer text-primary opacity-100")} />
        </div>
        <div className="flex flex-col p-5">
          <CodeViewer code={answer.code} language="javascript" />
          <TextViewer markdown={answer.content} />
        </div>
        <div className="flex justify-end">
          {answer.writer === data?.result.nickname && (
            <Button variant="outline" onClick={handleDelete}>
              게시글 삭제
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptedAnswerDetail;
