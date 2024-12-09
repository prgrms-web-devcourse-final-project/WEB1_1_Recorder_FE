export type TResponseUserTechs = {
  message: string;
  result: {
    stacks: { id: number; name: string }[] | null;
  };
};

export type TResponseTechList = {
  message: string;
  result: {
    skillStacks: string[];
  };
};

export type TResponseUserInfo = {
  message: string;
  result: TUserInfo;
};

export type TUserInfo = {
  nickname: string;
  profileImage: string;
  introduction: string;
  adoptedAnswerCount: number;
  affiliationName: string;
  businessEmail: string;
  loginType: string;
  socialId: string;
  totalAnswerCount: number;
};
