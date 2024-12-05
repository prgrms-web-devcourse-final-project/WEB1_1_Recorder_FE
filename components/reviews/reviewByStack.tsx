"use client";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getReviewList } from "@/services/getReviewList";
import { TReviewItem } from "@/types/reviewTypes";
import { useEffect, useState } from "react";
import { ImFilesEmpty } from "react-icons/im";

type Props = {
  userTechs: { id: number; name: string }[] | [];
};

const ReviewByStack = ({ userTechs }: Props) => {
  const [stack, setStack] = useState("");
  const [reviewList, setReviewList] = useState<TReviewItem[] | []>([]);

  const handleChange = (value: string) => {
    setStack(value);
  };

  useEffect(() => {
    const makeReviewList = async () => {
      const data = await getReviewList({ page: "1", ...(stack.length > 0 && { stack: stack }) });
      setReviewList(data);
    };

    makeReviewList();
  }, [stack]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">기술별 질문</CardTitle>
        <CardDescription className="pt-2">
          <ToggleGroup type="single" variant="outline" className="flex justify-start" onValueChange={handleChange}>
            {userTechs.map((tech, i) => {
              return (
                <ToggleGroupItem key={i} value={tech.name} aria-label="Toggle bold">
                  {tech.name}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {userTechs.length < 1 ? (
          <div className="flex h-72 w-full flex-col items-center justify-center">
            <p className="mb-5">아직 관심 기술을 선택하지 않았습니다.</p>
            <ImFilesEmpty size={80} color="gray" />
          </div>
        ) : (
          <ReviewSummaryList reviewList={reviewList} size="lg" length={3} />
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewByStack;
