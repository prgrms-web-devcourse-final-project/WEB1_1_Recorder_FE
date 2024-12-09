import { z } from "zod";
import { reviewFormSchema, answerFormSchema, liveFeedbackFormSchema } from "@/lib/formSchema";

export type ReviewFormSchema = z.infer<typeof reviewFormSchema>;
export type AnswerFormSchema = z.infer<typeof answerFormSchema>;
export type LiveFeedbackFormSchema = z.infer<typeof liveFeedbackFormSchema>;

export type TRequestReviewList = {
  type?: string;
  page: string;
  state?: string;
  stack?: string;
  keyword?: string;
};

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
  studentNickName: string;
  teacherId: number;
  teacherNickName: string;
  type: "DEBUGGING" | "REFACTORING";
  title: string;
  content: string;
  state: "WAITING_ACCEPTANCE" | "REJECTED" | "ACCEPTED";
  stacks: string[];
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
  studentNickName: string;
  teacherId: number;
  teacherNickName: string;
  type: "DEBUGGING" | "REFACTORING";
  title: string;
  githubLink: string;
  githubLinkReveal: "TRUE" | "FALSE";
  content: string;
  state: "WAITING_ACCEPTANCE" | "REJECTED" | "ACCEPTED";
  feedbackCodes: [
    {
      feedbackCodeId: number;
      name: string;
      content: string;
    },
    {
      feedbackCodeId: number;
      name: string;
      content: string;
    }
  ];
  stacks: string[];
};
