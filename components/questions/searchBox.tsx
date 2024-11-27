"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React, { useState } from "react";
import SearchInput from "@/components/questions/searchInput";

type Props = {};

const SearchBox = ({}: Props) => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const types = ["typescript", "react", "javsscript", "nextjs", "java", "lua", "go", "ruby"];

  return (
    <Card className="p-4">
      <SearchInput state={input} setState={setInput} />
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              onClick={() => {
                setOpen(!open);
              }}
            >
              선택
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Command>
              <CommandInput placeholder="Search framework..." className="h-9" />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {types.map((framework, i) => (
                    <CommandItem
                      key={i}
                      value={framework}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework}
                      <Check className={cn("ml-auto", value === framework ? "opacity-100" : "opacity-0")} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </Card>
  );
};

export default SearchBox;
