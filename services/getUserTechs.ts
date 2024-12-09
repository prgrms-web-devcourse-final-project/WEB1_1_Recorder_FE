import fetchInstance from "@/services/fetchInstance";
import { TResponseUserTechs } from "@/types/userTypes";

const getUserTechs = async (): Promise<
  | {
      id: number;
      name: string;
    }[]
  | []
> => {
  try {
    const data: TResponseUserTechs = await fetchInstance.get("/user/tech");
    return data.result?.stacks || [];
  } catch (error) {
    return [];
  }
};

export { getUserTechs };
