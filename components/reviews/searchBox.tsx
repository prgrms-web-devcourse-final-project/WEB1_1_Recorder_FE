"use client";
import SearchSelect from "@/components/reviews/searchSelect";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TRequestReviewList } from "@/types/reviewTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: TRequestReviewList;
};
const SearchBox = ({ params }: Props) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(params);
  const resetKeyWord = searchParams.get("keyword") || "";
  const [searchInput, setSearchInput] = useState("");
  const [input, setInput] = useState(resetKeyWord);
  const stateList = ["전체", "해결됨", "미해결"];
  const [state, setState] = useState("");
  const [stack, setStack] = useState("");

  // 최신순, 인기순 정렬은 추후 추가 예정
  // const [sort, setSort] = useState<"RECENT" | "POPULAR">("RECENT");
  // const sortTypeList = ["최신순", "인기순"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async () => {
    setInput(searchInput);
  };

  const handleParams = (state: string, string: string) => {
    if (state) {
      if (state === "전체" && string === "stack") {
        searchParams.delete(string);
      } else {
        searchParams.set(string, state);
      }
    } else {
      searchParams.delete(string);
    }
  };

  useEffect(() => {
    handleParams(input, "keyword");
    handleParams(stack, "stack");
    handleParams(state, "state");
    router.push("/reviews?" + (stack === "전체" ? "" : searchParams.toString()));
  }, [input, stack, state]);

  return (
    <Card className="p-4">
      <div className="m-auto md:w-2/3 lg:w-1/2">
        <div className="flex gap-2">
          <Input
            placeholder="검색어를 입력하세요."
            onChange={(e) => {
              handleChange(e);
            }}
            value={searchInput}
          ></Input>
          <Button variant="outline" onClick={handleSubmit}>
            검색
          </Button>
        </div>
        <div className="mt-2 flex justify-between">
          <ToggleGroup type="single" defaultValue={stateList[0]}>
            {stateList.map((item, i) => {
              return (
                <ToggleGroupItem
                  key={i}
                  value={item}
                  onClick={() => setState(item === "전체" ? "" : item === "미해결" ? "PENDING" : "ADOPTED")}
                >
                  {item}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
          <div className="flex gap-2">
            <SearchSelect state={stack} setState={setStack} placeholder="검색어를 입력하세요" />
            {/* <SearchSelect className="w-24" state={sortType} setState={setSortType} stateList={sortTypeList} /> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchBox;
