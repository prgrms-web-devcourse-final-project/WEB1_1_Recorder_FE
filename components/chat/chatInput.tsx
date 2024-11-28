"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {
  className?: string;
};

const ChatInput = ({ className }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    e.currentTarget.reset();
  };
  return (
    <form className={`relative ${className}`} onSubmit={handleSubmit}>
      <Textarea className="h-full w-full resize-none" placeholder="메시지를 입력하세요." name="content"></Textarea>
      <Button variant="secondary" type="submit" className="absolute bottom-4 right-4">
        작성
      </Button>
    </form>
  );
};
export default ChatInput;
