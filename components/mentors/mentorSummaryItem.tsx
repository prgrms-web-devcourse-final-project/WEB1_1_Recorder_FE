"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mentor } from "@/types/mentorTypes";
import { useRouter } from "next/navigation";

type Props = {
  mentor: Mentor;
};

const MentorSummaryItem = ({ mentor }: Props) => {
  const router = useRouter();
  return (
    <Card
      className="cursor-pointer transition-all hover:scale-[0.995] hover:shadow-lg"
      onClick={() => {
        router.push(`/detail/mentor/${mentor.userId}`);
      }}
    >
      <CardHeader className="pb-4">
        <CardTitle>{mentor.title}</CardTitle>
        <CardDescription className="line-clamp-2">{mentor.comment}</CardDescription>
        <div className="line-clamp-1">
          {mentor.type.map((name, i) => {
            return (
              <Badge key={i} className="mr-1" variant="secondary">
                {name}
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
            <span className="inline-block w-24 font-bold">소속</span>
            <span>{mentor.business}</span>
          </li>
          <li>
            <span className="inline-block w-24 font-bold">신뢰지수</span>
            <span>{mentor.score} 점</span>
          </li>
          <li>
            <span className="inline-block w-24 font-bold">라이브 피드백</span>
            <span>{mentor.liveCount} 회</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default MentorSummaryItem;
