import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

type Props = {
  state: string;
  setState: React.Dispatch<SetStateAction<string>>;
  fillterList: string[];
};

const SearchSelect = ({ state, setState, fillterList }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {state}
          <IoIosArrowDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {fillterList.map((fillterItem, i) => (
                <CommandItem
                  key={i}
                  value={fillterItem}
                  onSelect={(currentValue) => {
                    setState(currentValue === state ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {fillterItem}
                  <FaCheck />
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
