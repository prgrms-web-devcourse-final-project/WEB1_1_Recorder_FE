"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import getLiveFeedbackDetail from "@/services/getLiveFeedbackDetail";
import PageHeader from "@/components/pageHeader";
import { Button } from "@/components/ui/button";
import { cn, sortCodes } from "@/lib/utils";
import Link from "next/link";

const LiveEditor = dynamic(() => import("@/components/session/LiveEditor"), { ssr: false });

const Session = () => {
  const { feedbackId } = useParams<{ feedbackId: string }>();
  const { data } = useQuery({
    queryKey: ["liveFeedbackDetail", { id: feedbackId }],
    queryFn: () => getLiveFeedbackDetail({ id: feedbackId }),
    select: (data) => data !== null && data.result,
    enabled: !!feedbackId
  });
  const [docIndex, setDocIndex] = useState(0);
  if (!data) return null;
  const codes = sortCodes(data.feedbackCodes);
  return (
    <div className="min-h m-auto flex max-w flex-col gap-5 p-10">
      <PageHeader title={`라이브 피드백 : ${data.teacherNickName}-${data.studentNickName}`} />
      <div className="flex flex-wrap items-end gap-2">
        {codes.length >= 1 &&
          codes.map((code, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <span className={cn(index !== 0 && "sr-only")}>메인 코드</span>
              <span className={cn(index !== 1 && "sr-only")}>보조 코드</span>
              <Button
                variant="outline"
                onClick={() => setDocIndex(index)}
                className={cn("flex w-40 justify-start", docIndex === index && "border-primary")}
              >
                {code.name}
              </Button>
            </div>
          ))}
      </div>
      <LiveEditor key={docIndex} id={codes[docIndex].feedbackCodeId!} />
      <Link href="/detail/livefeedback">
        <Button>목록으로 돌아가기</Button>
      </Link>
    </div>
  );
};

export default Session;
