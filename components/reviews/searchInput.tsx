"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const params = useSearchParams();
  const query = params.get("query") || "";
  const router = useRouter();
  const [input, setInput] = useState(() => query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (input.length < 1) return;
    router.push(`/reviews?query=${input}`);
  };
  useEffect(() => {
    // `params`가 바뀔 때마다 input 값을 갱신
    const queryParam = params.get("query") || "";
    if (queryParam !== input) {
      setInput(queryParam); // URL에서 쿼리 값이 바뀌면 상태 업데이트
    }
  }, [params]); // params가 변경될 때마다 실행

  return (
    <div className="flex gap-2">
      <Input
        placeholder="검색어를 입력하세요."
        onChange={(e) => {
          handleChange(e);
        }}
        value={input}
      ></Input>
      <Button variant="outline" onClick={handleSubmit}>
        검색
      </Button>
    </div>
  );
};

export default SearchInput;
