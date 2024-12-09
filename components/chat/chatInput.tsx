"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { SetStateAction } from "react";

type Props = {
  state: string;
  setState: React.Dispatch<SetStateAction<string>>;
  setSendInput: React.Dispatch<SetStateAction<string>>;
  className?: string;
};

const ChatInput = ({ state, setState, setSendInput, className }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendInput(state);
    setState("");
  };

  return (
    <form className={`relative ${className}`} onSubmit={handleSubmit}>
      <Textarea
        className="h-full w-full resize-none"
        placeholder="메시지를 입력하세요."
        value={state}
        onChange={handleChange}
      ></Textarea>
      <Button variant="secondary" type="submit" className="absolute bottom-4 right-4">
        작성
      </Button>
    </form>
  );
};
export default ChatInput;
