"use client";
import PageHeader from "@/components/pageHeader";
import { Separator } from "@/components/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiGithub } from "react-icons/fi";
import { cn, sortCodes } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CodeViewer from "@/components/codeViewer";
import TextViewer from "@/components/textEditor/textViewer";
import { TLiveFeedbackDetail } from "@/types/reviewTypes";
import Link from "next/link";

type Props = {
  liveFeedback: TLiveFeedbackDetail;
};
const LiveFeedbackContentDetail = ({ liveFeedback }: Props) => {
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(0);
  const code = sortCodes(liveFeedback.feedbackCodes);

  return (
    <>
      <div className="flex justify-between">
        <PageHeader title={liveFeedback.title} />
        <Link href="/detail/livefeedback">
          <Button>목록으로 돌아가기</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 px-5">
        <div className="flex items-center gap-2 font-semibold">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>{liveFeedback.studentNickName[0]}</AvatarFallback>
          </Avatar>
          <span>{liveFeedback.studentNickName}</span>
          <Separator />
          <FiGithub size={25} />
          <span>{liveFeedback.githubLink}</span>
        </div>
        <div className="flex flex-wrap items-end gap-2">
          {code.length >= 1 &&
            code.map((code, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <span className={cn(index !== 0 && "sr-only")}>메인 코드</span>
                <span className={cn(index !== 1 && "sr-only")}>보조 코드</span>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCodeIndex(index)}
                  className={cn("flex w-40 justify-start", selectedCodeIndex === index && "border-primary")}
                >
                  {code.name.replace("main!", "")}
                </Button>
              </div>
            ))}
        </div>
        <div>
          <div className="border-b border-[#858585] bg-[#1e1e1e] p-2 text-[#dcdcdc]">
            {code[selectedCodeIndex].name.replace("main!", "")}
          </div>
          <div>
            <CodeViewer code={code[selectedCodeIndex].content} language="javascript" />
          </div>
        </div>
        <div>
          <TextViewer markdown={liveFeedback.content} />
        </div>

        <Link href={`/session/${liveFeedback.id}`} className="flex justify-center">
          <Button>라이브 피드백 -&gt;</Button>
        </Link>
      </div>
    </>
  );
};

export default LiveFeedbackContentDetail;
