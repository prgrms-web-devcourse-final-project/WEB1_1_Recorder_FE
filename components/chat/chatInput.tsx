"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { SetStateAction } from "react";

type Props = {
  setState: React.Dispatch<SetStateAction<string>>;
  className?: string;
};

const ChatInput = ({ setState, className }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get("input") as string;
    setState(inputValue);
    form.reset();
  };

  return (
    <form className={`relative ${className}`} onSubmit={handleSubmit}>
      <Textarea className="h-full w-full resize-none" placeholder="메시지를 입력하세요." name="input"></Textarea>
      <Button variant="secondary" type="submit" className="absolute bottom-4 right-4">
        작성
      </Button>
    </form>
  );
};
export default ChatInput;
