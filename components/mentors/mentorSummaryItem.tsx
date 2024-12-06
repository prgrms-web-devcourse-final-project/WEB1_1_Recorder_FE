"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TMentorItem } from "@/types/mentorTypes";
import { Dispatch, SetStateAction } from "react";

type Props = {
  mentor: TMentorItem;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MentorSummaryItem = ({ mentor, setOpen }: Props) => {
  return (
    <Card
      className="cursor-pointer transition-all hover:scale-[0.995] hover:shadow-lg"
      onClick={() => {
        setOpen(true);
      }}
    >
      <CardHeader className="pb-4">
        <CardTitle>{mentor.title}</CardTitle>
        <CardDescription className="line-clamp-2">{mentor.content}</CardDescription>
        <div className="line-clamp-1">
          {mentor.skillStacks.map((stack, i) => {
            return (
              <Badge key={i} className="mr-1" variant="secondary">
                {stack}
              </Badge>
            );
          })}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="flex items-center pb-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={mentor.userImage || "https://github.com/shadcn.png"}></AvatarImage>
          </Avatar>
          <span className="px-2">{mentor.userId}</span>
        </div>
        <ul className="text-sm">
          <li>
            <span className="inline-block w-24 font-bold">라이브 피드백</span>
            <span>{mentor.liveFeedbackCount} 회</span>
          </li>
          <li>
            <span className="inline-block w-24 font-bold">답변 채택률</span>
            <span>{mentor.answerAcceptanceRate} %</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default MentorSummaryItem;
