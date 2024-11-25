"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  content: string;
  created_at: string;
  user_img?: string;
};

const ReviewSummaryItem = ({ title, content, created_at, user_img = "https://github.com/shadcn.png" }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Avatar>
            <AvatarImage src={user_img} />
          </Avatar>
          <span className="px-4 text-2xl">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>{content}</div>
        <div>{created_at}</div>
      </CardContent>
    </Card>
  );
};

export default ReviewSummaryItem;
