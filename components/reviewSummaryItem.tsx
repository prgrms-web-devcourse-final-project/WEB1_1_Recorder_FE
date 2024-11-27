import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiMessage3Line } from "react-icons/ri";

type Props = {
  size?: "md" | "lg";
  title: string;
  content: string;
  created_at: string;
  type: string[];
  answerCount?: number;
  userInfo?: {
    userName: string;
    userImage: string;
  };
};

const ReviewSummaryItem = ({ size = "md", title, content, created_at, type, answerCount = 0, userInfo }: Props) => {
  return (
    <Card>
      <CardHeader className={`${size === "md" ? "p-3" : "p-4"} pb-0`}>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="pr-4 text-lg">{title}</span>
            <span className="text-sm font-medium text-zinc-500">{created_at}</span>
          </div>
          <div className="flex font-medium">
            <RiMessage3Line />
            <span className="px-1">{answerCount}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className={`${size === "md" ? "p-3" : "p-4"}`}>
        <div className={size === "md" ? "line-clamp-1" : "line-clamp-2"}>{content}</div>
        <div className="flex justify-between">
          <div className="my-1 line-clamp-1">
            {type.map((name, i) => {
              return (
                <Badge key={i} className="mr-1" variant="secondary">
                  {name}
                </Badge>
              );
            })}
          </div>
          {userInfo && (
            <div className="flex items-center">
              <Avatar className="h-6 w-6">
                <AvatarImage src={userInfo.userImage}></AvatarImage>
              </Avatar>
              <span className="pl-1 text-sm">{userInfo.userName}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSummaryItem;
