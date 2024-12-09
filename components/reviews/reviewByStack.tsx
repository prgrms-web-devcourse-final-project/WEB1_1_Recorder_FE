"use client";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getReviewList } from "@/services/getReviewList";
import { getUserTechs } from "@/services/getUserTechs";
import { TReviewItem } from "@/types/reviewTypes";
import { useEffect, useState } from "react";
import { ImFilesEmpty } from "react-icons/im";

const ReviewByStack = () => {
  const [stack, setStack] = useState("");
  const [reviewList, setReviewList] = useState<TReviewItem[] | []>([]);
  const [userTechs, setUserTechs] = useState<
    | {
        id: number;
        name: string;
      }[]
    | []
  >([]);
  const handleChange = (value: string) => {
    setStack(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      let data = await getUserTechs();
      if (data.length < 1) {
        data = [
          { id: 1, name: "JAVA" },
          { id: 2, name: "TypeScript" },
          { id: 3, name: "Python" }
        ];
      }
      setUserTechs(data);
      setStack(data[0].name);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const makeReviewList = async () => {
      const data = await getReviewList({ page: "0", ...(stack.length > 0 && { stack: stack }) });
      setReviewList(data?.result.content || []);
    };
    makeReviewList();
  }, [stack]);

  return (
    <Card className="border-none p-0 shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="border-b-2 border-primary pb-2 text-2xl font-bold">기술별 질문</CardTitle>
        <CardDescription className="py-2">
          <ToggleGroup
            type="single"
            variant="outline"
            className="flex justify-start"
            value={stack}
            onValueChange={handleChange}
          >
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
      <CardContent className="min-h-80 p-0">
        {reviewList.length < 1 ? (
          <div className="flex min-h-80 w-full flex-col items-center justify-center">
            <p className="mb-5">아직 등록된 질문이 없습니다.</p>
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
