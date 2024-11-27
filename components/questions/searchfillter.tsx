"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Props = {
  fillterList: string[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFillter = ({ fillterList, state, setState }: Props) => {
  return (
    <ToggleGroup type="single" defaultValue={fillterList[0]}>
      {fillterList.map((item, i) => {
        return (
          <ToggleGroupItem key={i} value={item} onClick={() => setState(item)}>
            {item}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
};

export default SearchFillter;
