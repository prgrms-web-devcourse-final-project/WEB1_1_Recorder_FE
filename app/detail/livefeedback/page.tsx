"use client";
import ContentDetail from "@/components/detail/liveFeedbackContentDetail";
import getLiveFeedbackList from "@/services/getLiveFeedbackList";
import { useQuery } from "@tanstack/react-query";
import PageHeader from "@/components/pageHeader";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import LiveFeedbackContentDetail from "@/components/detail/liveFeedbackContentDetail";
import { TLiveFeedbackList } from "@/types/reviewTypes";
import Link from "next/link";

const LiveFeedbackList = () => {
  const { data } = useQuery({ queryKey: ["liveFeedbackList"], queryFn: getLiveFeedbackList });

  return (
    <>
      <div className="m-auto flex max-w flex-col gap-5 p-10">
        <PageHeader title="나에게 도착한 라이브 피드백 요청" />
        {data?.result.map((feedback, i) => {
          return (
            <Link href={`/detail/livefeedback/${feedback.id}`} key={`feedback-${i}`}>
              <Card className="flex cursor-pointer flex-col gap-2 p-8">
                <CardTitle>{feedback.title}</CardTitle>
                <CardDescription>{feedback.studentNickName}의 요청</CardDescription>
                <CardDescription className="flex gap-2">
                  <Badge>{feedback.type}</Badge>{" "}
                  {feedback.stacks.map((v, index) => (
                    <Badge variant="outline" key={`skill-${i}-${index}`}>
                      {v}
                    </Badge>
                  ))}
                </CardDescription>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default LiveFeedbackList;
