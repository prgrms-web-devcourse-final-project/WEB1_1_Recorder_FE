import { z } from "zod";
import { reviewFormSchema } from "@/lib/reviewFormSchema";

export type ReviewFormSchema = z.infer<typeof reviewFormSchema>;

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

export type Code = {
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
  codes: Code;
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

export type TReviewResponse = {
  message: string;
  result: TReviewDetail;
};
