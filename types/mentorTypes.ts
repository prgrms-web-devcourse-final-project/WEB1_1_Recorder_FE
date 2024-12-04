export type TMentorItem = { userId: number; description: string; nickname: string; skillStacks: string[] };

export type TRequestMentor = {
  description: string;
  skillStacks: string[];
};
export type TResponseMentorList = {
  message: string;
  result: {
    content: TMentorItem[] | null;
    currentPage: number;
    size: number;
    startPage: number;
    endPage: number;
    prev: boolean;
    next: boolean;
  };
};
