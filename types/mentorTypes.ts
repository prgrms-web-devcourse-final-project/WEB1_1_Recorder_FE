export type TMentorItem = {
  userId: string;
  mentorId: string;
  profileImage: string;
  nickName: string;
  title: string;
  content: string;
  skillStacks: string[];
  answerAcceptanceRate: number;
  liveFeedbackCount: number;
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
