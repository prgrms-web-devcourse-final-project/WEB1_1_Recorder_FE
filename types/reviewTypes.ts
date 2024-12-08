import { z } from "zod";
import { reviewFormSchema, answerFormSchema, liveFeedbackFormSchema } from "@/lib/formSchema";

export type ReviewFormSchema = z.infer<typeof reviewFormSchema>;
export type AnswerFormSchema = z.infer<typeof answerFormSchema>;
export type LiveFeedbackFormSchema = z.infer<typeof liveFeedbackFormSchema>;
export type TResponseReviewList = {
  message: string;
  result: {
    content: TReviewItem[] | [];
    currentPage: number;
    size: number;
    startPage: number;
    endPage: number;
    prev: boolean;
    next: boolean;
  };
};
export type TLiveFeedbackList = {
  id: number;
  studentId: number;
  teacherId: number;
  type: "DEBUGGING" | "REFACTORING";
  title: string;
  githubLink: "http://github.com";
  githubLinkReveal: "TRUE" | "FALSE";
  description: string;
  state: string;
  feedbackCodes: [
    {
      name: string;
      content: string;
    },
    {
      name: string;
      content: string;
    }
  ];
  skillStacks: string[];
};
export type TResponseRecentReviewList = {
  message: string;
  result: TReviewItem[] | null;
};

export type TResponsePopularReviewList = {
  message: string;
  result: TReviewItem[] | [];
};

export type TReviewItem = {
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
  content: string;
  code: string;
  writer: string;
  profileImage: string | null;
  totalAnswerCount: number;
  adoptedRate: number;
  createdAt: string;
  isAccept: boolean;
  goodCount: number;
  badCount: number;
};

export type TReviewDetail = {
  id: number;
  writer: string;
  profileImage: string | null;
  title: string;
  createdAt: string;
  answerCount: number;
  readCount: number;
  githubLink: string;
  stacks: string[];
  codes: Code[];
  content: string;
};

export type TLiveFeedbackDetail = {
  id: number;
  studentId: number;
  teacherId: number;
  type: "DEBUGGING" | "REFACTORING";
  title: string;
  githubLink: string;
  githubLinkReveal: "TRUE" | "FALSE";
  description: string;
  state: string;
  feedbackCodes: [
    {
      name: string;
      content: string;
    },
    {
      name: string;
      content: string;
    }
  ];
  skillStacks: string[];
};
