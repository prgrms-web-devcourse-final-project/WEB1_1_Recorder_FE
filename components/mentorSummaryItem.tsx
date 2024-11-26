import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type Props = {
  title: string;
  type: string[];
  business: string;
  score: number;
  liveCount: number;
  userId: string;
  comment: string;
  userImg?: string;
};

const MentorSummaryItem = ({ userImg = "https://github.com/shadcn.png", ...mentor }: Props) => {
  return (
    <Card>
      <CardHeader className="border-b-2 pb-4">
        <CardTitle>{mentor.title}</CardTitle>
        <CardDescription className="line-clamp-2">{mentor.comment}</CardDescription>
        <div className="line-clamp-1">
          {mentor.type.map((name, i) => {
            return (
              <Badge key={i} className="mr-1">
                {name}
              </Badge>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-center pb-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={userImg}></AvatarImage>
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
