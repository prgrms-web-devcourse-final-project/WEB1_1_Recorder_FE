"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

type Props = {
  setState: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const SearchInput = ({ setState, className }: Props) => {
  const inputRef = useRef("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  const handleSubmit = async () => {
    setState(inputRef.current);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Input
        placeholder="검색어를 입력하세요."
        onChange={(e) => {
          handleChange(e);
        }}
      ></Input>
      <Button variant="outline" onClick={handleSubmit}>
        검색
      </Button>
    </div>
  );
};

export default SearchInput;
