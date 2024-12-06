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
