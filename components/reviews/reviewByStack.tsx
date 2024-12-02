"use client";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { reviewList } from "@/constants/reviews";
import { userStacks } from "@/constants/user";
import { getReviewList } from "@/lib/getReviewList";
import { useEffect, useState } from "react";

type Props = {};

const ReviewByStack = ({}: Props) => {
  const [stack, setStack] = useState("");
  // const [reviewList, setReviewList] = useState([]);
  const handleChange = (value: string) => {
    setStack(value);
  };

  // useEffect(() => {
  //   const setList = async () => {
  //     if (userStacks.includes(stack)) {
  //       const reviews = await getReviewList({ page: 1, stack: stack });
  //       setReviewList(reviews);
  //     } else {
  //       const reviews = await getReviewList({ page: 1 });
  //       setReviewList(reviews);
  //     }
  //   };
  //   setList();
  // }, [stack]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">기술별 질문</CardTitle>
        <CardDescription className="pt-2">
          <ToggleGroup type="single" variant="outline" className="flex justify-start" onValueChange={handleChange}>
            {userStacks.map((stack, i) => {
              return (
                <ToggleGroupItem key={i} value={stack} aria-label="Toggle bold">
                  {stack}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ReviewSummaryList reviewList={reviewList} size="lg" length={3} />
      </CardContent>
    </Card>
  );
};

export default ReviewByStack;
