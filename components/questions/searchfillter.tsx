"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Props = {};
const SearchFillter = ({}: Props) => {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="1">전체</ToggleGroupItem>
      <ToggleGroupItem value="2">해결됨</ToggleGroupItem>
      <ToggleGroupItem value="3">미해결</ToggleGroupItem>
    </ToggleGroup>
  );
};

export default SearchFillter;
