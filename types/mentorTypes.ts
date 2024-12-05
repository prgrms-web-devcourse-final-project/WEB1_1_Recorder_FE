export type TMentorItem = {
  userId: number;
  description: string;
  nickname: string;
  userImage: string;
  skillStacks: string[];
  content: string;
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
