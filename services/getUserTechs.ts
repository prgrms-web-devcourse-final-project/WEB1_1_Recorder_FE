import fetchInstance from "@/services/fetchInstance";
import { TResponseUserTechs } from "@/types/userTypes";

const getUserTechs = async () => {
  try {
    const data: TResponseUserTechs = await fetchInstance.get("/user/tech");
    return data.result?.stacks || [];
  } catch (error) {
    return [];
  }
};

export { getUserTechs };
