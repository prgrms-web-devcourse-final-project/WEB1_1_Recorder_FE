"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import SearchInput from "@/components/questions/searchInput";
import SearchSelect from "@/components/questions/searchSelect";
import SearchFillter from "@/components/questions/searchfillter";

type Props = {};

const SearchBox = ({}: Props) => {
  const [input, setInput] = useState("");
  const types = ["typescript", "react", "javsscript", "nextjs", "java", "lua", "go", "ruby"];
  const [value, setValue] = useState("기술 스택을 선택해 보세요");
  const type2 = ["최신순", "인기순"];
  const [value2, setValue2] = useState("최신순");

  return (
    <Card className="p-4">
      <SearchInput state={input} setState={setInput} />
      <div className="mt-2 flex gap-2">
        <SearchSelect state={value} setState={setValue} fillterList={types} />
        <SearchSelect state={value2} setState={setValue2} fillterList={type2} />
        <SearchFillter />
      </div>
    </Card>
  );
};

export default SearchBox;
