import { z } from "zod";
import { reviewFormSchema, answerFormSchema } from "@/lib/formSchema";

export type ReviewFormSchema = z.infer<typeof reviewFormSchema>;
export type AnswerFormSchema = z.infer<typeof answerFormSchema>;

export type ReviewItem = {
  id: number;
  writer: string;
  writerImage?: string;
  title: string;
  content?: string;
  createdAt: string;
  answerCount: number;
  readCount: number;
  stacks: string[];
};

type Code = {
  name: string;
  content: string;
};

export type TAnswer = {
  id: number;
  title: string;
  writer: string;
  content: string;
  createdAt: string;
  isAccept: boolean;
  goodCount: number;
  badCount: number;
  code: string;
};

export type TReviewDetail = {
  id: number;
  writer: string;
  title: string;
  createdAt: string;
  answerCount: number;
  readCount: number;
  githubLink: string;
  stacks: string[];
  codes: Code[];
  content: string;
  answers: TAnswer[];
};
