"use client";
import PageHeader from "@/components/pageHeader";
import { Separator } from "@/components/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiGithub } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CodeViewer from "@/components/codeViewer";
import TextViewer from "@/components/textEditor/textViewer";
import { TReviewDetail } from "@/types/reviewTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import getMyInfo from "@/services/getMyInfo";
import deleteReview from "@/services/deleteReview";
import { useRouter } from "next/navigation";

type Props = {
  review: TReviewDetail;
};
const ContentDetail = ({ review }: Props) => {
  const router = useRouter();
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0);
  // const code = sortCodes(review.codes);
  const { data } = useQuery({ queryKey: ["getMyInfo"], queryFn: getMyInfo });

  const mutation = useMutation({
    mutationFn: () => deleteReview(review.id)
  });
  const handleDelete = () => {
    mutation.mutate();
    router.push("/reviews");
  };

  return (
    <>
      <div className="flex justify-between">
        <PageHeader title={review.title} />
        {review.writer === data?.result.nickname && <Button onClick={handleDelete}>게시글 삭제</Button>}
      </div>
      <div className="flex flex-col gap-4 px-5">
        <div className="flex items-center gap-2 font-semibold">
          <Avatar>
            <AvatarImage src={review.profileImage || ""} />
            <AvatarFallback>{review.writer[0]}</AvatarFallback>
          </Avatar>
          <span>{review.writer}</span>
          <Separator />
          <FiGithub size={25} />
          <span>{review.githubLink}</span>
          <Separator />
          <span>{review.createdAt.split("T")[0]}</span>
          <Separator />
          <span>조회수 {review.readCount}</span>
          <Separator />
          <span>답변 {review.answerCount}개</span>
        </div>
        <div className="flex flex-wrap items-end gap-2">
          {review.codes.length >= 1 &&
            review.codes.map((code, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <span className={cn(index !== 0 && "sr-only")}>메인 코드</span>
                <span className={cn(index !== 1 && "sr-only")}>보조 코드</span>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCodeIndex(index)}
                  className={cn("flex w-40 justify-start", selectedCodeIndex === index && "border-primary")}
                >
                  {code.name}
                </Button>
              </div>
            ))}
        </div>
        <div>
          <div>
            <CodeViewer code={review.codes[selectedCodeIndex].content} language="javascript" />
          </div>
        </div>
        <div>
          <TextViewer markdown={review.content} />
        </div>
      </div>
    </>
  );
};

export default ContentDetail;
