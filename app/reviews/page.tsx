"use client";
import ReviewSummaryList from "@/components/reviews/reviewSummaryList";
import SearchInput from "@/components/reviews/searchInput";
import SearchFillter from "@/components/reviews/searchfillter";
import SearchSelect from "@/components/reviews/searchSelect";
import { Card } from "@/components/ui/card";
import { techStackList } from "@/constants/reviews";
import { useEffect, useState } from "react";
import { getReviewList } from "@/services/getReviewList";

const Reviews = () => {
  const [reviewList, setReviewList] = useState(() => {
    return [];
  });
  const [techStack, setTechStack] = useState("기술 스택");
  const [input, setInput] = useState("");
  const [reviewState, setReviewState] = useState<"ALL" | "PENDING" | "ADOPTED">("ALL");
  const [stack, setStack] = useState("");
  const [sort, setSort] = useState<"RECENT" | "POPULAR">("RECENT");
  const sortTypeList = ["최신순", "인기순"];
  const fillterList = ["전체", "해결됨", "미해결"];
  const [fillter, setFillter] = useState("전체");
  const [sortType, setSortType] = useState("최신순");

  useEffect(() => {
    const r = async () => {
      const aa = await getReviewList({ page: "1" });
      console.log(aa);
    };
    r();
  }, []);

  return (
    <div className="m-auto max-w lg:px-20">
      <Card className="p-4">
        <div className="m-auto md:w-2/3 lg:w-1/2">
          <SearchInput state={input} setState={setInput} />
          <div className="mt-2 flex justify-between">
            <SearchFillter fillterList={fillterList} state={fillter} setState={setFillter} />
            <div className="flex gap-2">
              <SearchSelect
                className="w-32"
                placeholder="기술 스택을 입력해보세요."
                state={techStack}
                setState={setTechStack}
                fillterList={techStackList}
              />
              <SearchSelect className="w-24" state={sortType} setState={setSortType} fillterList={sortTypeList} />
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
