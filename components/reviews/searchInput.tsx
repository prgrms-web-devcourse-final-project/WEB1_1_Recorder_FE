"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getReviewList } from "@/services/getReviewList";
import { TReviewItem } from "@/types/reviewTypes";

type Props = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setReviewList: React.Dispatch<React.SetStateAction<TReviewItem[] | []>>;
  className?: string;
};

const SearchInput = ({ state, setState, setReviewList, className }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleSubmit = async () => {
    const data = await getReviewList({ page: "0", keyword: state });
    setReviewList(data);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
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
