import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiMessage3Line } from "react-icons/ri";

type Props = {
  title: string;
  content: string;
  created_at: string;
  type: string[];
  userImg?: string;
  answerCount?: number;
};

const ReviewSummaryItem = ({
  title,
  content,
  created_at,
  type,
  userImg = "https://github.com/shadcn.png",
  answerCount = 0
}: Props) => {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={userImg} />
            </Avatar>
            <span className="px-4 text-2xl">{title}</span>
            <span className="font-medium text-zinc-500">{created_at}</span>
          </div>
          <div className="flex font-medium">
            <RiMessage3Line />
            <span className="px-1">{answerCount}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="line-clamp-2">{content}</div>
        <div className="my-1 line-clamp-1">
          {type.map((name, i) => {
            return (
              <Badge key={i} className="mr-1">
                {name}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSummaryItem;
