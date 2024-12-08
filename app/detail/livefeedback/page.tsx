"use client";
import ContentDetail from "@/components/detail/liveFeedbackContentDetail";
import getLiveFeedbackList from "@/services/getLiveFeedbackList";
import { useQuery } from "@tanstack/react-query";
import PageHeader from "@/components/pageHeader";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import LiveFeedbackContentDetail from "@/components/detail/liveFeedbackContentDetail";
import { TLiveFeedbackDetail } from "@/types/reviewTypes";

const LiveFeedbackList = () => {
  const { data } = useQuery({ queryKey: ["liveFeedbackList"], queryFn: getLiveFeedbackList });
  const [selectedLiveFeedback, setSelectedLiveFeedback] = useState<TLiveFeedbackDetail | null>(null);
  const handleClick = (feedback: TLiveFeedbackDetail) => {
    setSelectedLiveFeedback(feedback);
  };
  const handleReturn = () => {
    setSelectedLiveFeedback(null);
  };
  return (
    <>
      {!selectedLiveFeedback ? (
        <div className="m-auto flex max-w flex-col gap-5 p-10">
          <PageHeader title="나에게 도착한 라이브 피드백 요청" />
          {data?.result.map((feedback, i) => {
            return (
              <Card
                className="flex cursor-pointer flex-col gap-2 p-8"
                key={`feedback-${i}`}
                onClick={() => {
                  handleClick(feedback);
                }}
              >
                <CardTitle>{feedback.title}</CardTitle>
                <CardDescription>{feedback.studentId}의 요청</CardDescription>
                <CardDescription>
                  {feedback.skillStacks.map((v, index) => (
                    <Badge variant="outline" key={`skill-${i}-${index}`}>
                      {v}
                    </Badge>
                  ))}
                </CardDescription>
              </Card>
            );
          })}
        </div>
      ) : (
        selectedLiveFeedback && (
          <div className="m-auto flex max-w flex-col gap-5 p-10">
            <LiveFeedbackContentDetail liveFeedback={selectedLiveFeedback} handleReturn={handleReturn} />
          </div>
        )
      )}
    </>
  );
};

export default LiveFeedbackList;
