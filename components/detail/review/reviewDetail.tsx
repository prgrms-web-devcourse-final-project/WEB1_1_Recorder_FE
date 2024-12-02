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
import { data } from "@/constants/detailReviewData";

const ReviewDetail = () => {
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0);
  return (
    <>
      <PageHeader title={data.result.title} />
      <div className="flex flex-col gap-4 px-5">
        <div className="flex items-center gap-2 font-semibold">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>{data.result.writer}</span>
          <Separator />
          <FiGithub size={25} />
          <span>{data.result.githubLink}</span>
          <Separator />
          <span>{data.result.createdAt}</span>
          <Separator />
          <span>조회수 {data.result.readCount}</span>
          <Separator />
          <span>답변 {data.result.answerCount}개</span>
        </div>
        <div className="flex flex-wrap items-end gap-2">
          {data.result.codes.length >= 1 &&
            data.result.codes.map((code, index) => (
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
          <div className="border-b border-[#858585] bg-[#1e1e1e] p-2 text-[#dcdcdc]">
            {data.result.codes[selectedCodeIndex].name}
          </div>
          <div>
            <CodeViewer code={data.result.codes[selectedCodeIndex].content} language="javascript" />
          </div>
        </div>
        <div>
          <TextViewer markdown={data.result.content} />
        </div>
      </div>
    </>
  );
};

export default ReviewDetail;
