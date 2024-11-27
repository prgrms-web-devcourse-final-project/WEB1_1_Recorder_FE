"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ state, setState }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const handleSubmit = () => {
    setState("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="검색어를 입력하세요."
        value={state}
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
