"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (input.length < 1) return;
    if (input) {
      searchParams.set("keyword", input);
    } else {
      searchParams.delete("keyword");
    }
    setInput("");
    router.push("/reviews?" + searchParams.toString());
  };

  return (
    <div className="flex items-center gap-2">
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
