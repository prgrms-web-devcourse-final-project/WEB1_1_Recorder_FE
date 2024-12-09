"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TReviewItem } from "@/types/reviewTypes";
import { useRouter } from "next/navigation";
import { RiMessage3Line } from "react-icons/ri";

type Props = {
  review: TReviewItem;
  size?: "md" | "lg";
};

const ReviewSummaryItem = ({ review, size = "md" }: Props) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`detail/review/${review.id}`)}
      className="cursor-pointer transition-all hover:scale-[0.995] hover:shadow-lg"
    >
      <CardHeader className={`${size === "md" ? "p-3" : "p-4"} pb-0`}>
        <CardTitle className="flex items-center justify-between">
          <div className="line-clamp-1 flex w-11/12 items-center">
            <span className="pr-4 text-lg">{review.title}</span>
            <span className="text-sm font-medium text-zinc-500 sm:hidden md:block">{review.createdAt}</span>
          </div>
          <div className="flex grow font-medium">
            <RiMessage3Line />
            <span className="px-1">{review.answerCount}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className={`${size === "md" ? "p-3" : "p-4"}`}>
        <div className={size === "md" ? "line-clamp-1" : "line-clamp-2"}>{review.content}</div>
        <div className="flex justify-between">
          <div className="my-1 line-clamp-1">
            {review.stacks.map((techName, i) => {
              return (
                <Badge key={i} className="mr-1" variant="secondary">
                  {techName}
                </Badge>
              );
            })}
          </div>
          <div className="flex items-center">
            <Avatar className="h-6 w-6">
              <AvatarImage src={review.profileImage || "https://github.com/shadcn.png"}></AvatarImage>
            </Avatar>
            <span className="pl-1 text-sm">{review.writer}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSummaryItem;
