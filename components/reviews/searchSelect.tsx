import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

type Props = {
  state: string;
  setState: React.Dispatch<SetStateAction<string>>;
  fillterList: string[];
  className?: string;
  placeholder?: string;
};

const SearchSelect = ({ state, setState, fillterList, className, placeholder }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={`justify-between ${className}`}>
        <Button variant="outline">
          {state}
          <IoIosArrowDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          {placeholder ? <CommandInput placeholder={placeholder} className="h-9" /> : <></>}
          <CommandList>
            <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
            <CommandGroup>
              {fillterList.map((item, i) => (
                <CommandItem
                  className="flex justify-between"
                  key={i}
                  value={item}
                  onSelect={(currentValue) => {
                    console.log(currentValue);
                    setOpen(false);
                    setState(currentValue === state ? fillterList[0] : currentValue);
                  }}
                >
                  {item}
                  <FaCheck className={state === item ? "" : "hidden"} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchSelect;
