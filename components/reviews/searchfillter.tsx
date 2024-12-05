"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Props = {
  stateList: string[];
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFillter = ({ stateList, setState }: Props) => {
  return (
    <ToggleGroup type="single" defaultValue={stateList[0]}>
      {stateList.map((item, i) => {
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
