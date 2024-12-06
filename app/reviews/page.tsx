"use client";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import SearchFillter from "@/components/reviews/searchfillter";
import SearchInput from "@/components/reviews/searchInput";
import SearchSelect from "@/components/reviews/searchSelect";
import { Card } from "@/components/ui/card";
import { getReviewList } from "@/services/getReviewList";
import { TReviewItem } from "@/types/reviewTypes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Reviews = () => {
  const params = useSearchParams();
  const query = params.get("query") || "";
  const [input, setInput] = useState(query);
  const [reviewList, setReviewList] = useState<TReviewItem[] | []>(() => {
    return [];
  });
  const [stack, setStack] = useState("");
  const stateList = ["전체", "해결됨", "미해결"];
  const [state, setState] = useState("전체");
  // 최신순, 인기순 정렬은 추후 추가 예정
  // const [sort, setSort] = useState<"RECENT" | "POPULAR">("RECENT");
  // const sortTypeList = ["최신순", "인기순"];

  useEffect(() => {
    const makeReviewList = async () => {
      const data = await getReviewList({ page: 0, keyword: input });
      setReviewList(data);
    };
    makeReviewList();
  }, []);

  useEffect(() => {
    // `params`가 바뀔 때마다 input 값을 갱신
    const queryParam = params.get("query") || "";
    if (queryParam !== input) {
      setInput(queryParam); // URL에서 쿼리 값이 바뀌면 상태 업데이트
    }
  }, [params]); // params가 변경될 때마다 실행

  useEffect(() => {
    const makeReviewList = async () => {
      const reviewState: "" | "PENDING" | "ADOPTED" =
        state === "전체" ? "" : state === "해결됨" ? "ADOPTED" : "PENDING";
      const tech = stack === "전체" ? "" : stack;
      const data = await getReviewList({
        page: 0,
        keyword: input,
        ...(tech.length > 0 && { stack: tech.toUpperCase() }),
        ...(reviewState.length > 0 && { state: reviewState })
      });
      setReviewList(data);
    };
    makeReviewList();
  }, [input, stack, state]);

  return (
    <div className="m-auto max-w lg:px-20">
      <Card className="p-4">
        <div className="m-auto md:w-2/3 lg:w-1/2">
          <SearchInput />
          <div className="mt-2 flex justify-between">
            <SearchFillter stateList={stateList} setState={setState} />
            <div className="flex gap-2">
              <SearchSelect
                className="w-32"
                placeholder="기술 스택을 입력해보세요."
                state={stack}
                setState={setStack}
              />
              {/* <SearchSelect className="w-24" state={sortType} setState={setSortType} stateList={sortTypeList} /> */}
            </div>
          </div>
        </div>
      </Card>
      <section className="my-10">
        <ReviewSummaryList reviewList={reviewList} size="lg" />
      </section>
    </div>
  );
};

export default Reviews;
