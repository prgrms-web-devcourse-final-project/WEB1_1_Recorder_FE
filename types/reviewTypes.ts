export type Question = {
  id: number;
  users_id: number;
  title: string;
  type: string[];
  state: string;
  content: string;
  read_count: number;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  is_anomyous: boolean;
};

export type Code = {
  name: string;
  content: string;
};

export type Answer = {
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

export type Result = {
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
  answers: Answer[];
};

export type TReviewDetail = {
  message: string;
  result: Result;
};
