export type TResponseUserTechs = {
  message: string;
  result: {
    stacks: { id: number; name: string }[] | null;
  };
};
