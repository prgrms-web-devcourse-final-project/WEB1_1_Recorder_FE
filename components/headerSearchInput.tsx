"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const HeaderSearchInput = () => {
  const params = useSearchParams();
  const query = params.get("query") || "";
  const router = useRouter();
  const [input, setInput] = useState(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (input.length < 1) return;
    router.push(`/reviews?query=${input}`);
  };

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
export { HeaderSearchInput };
