import fetchInstance from "@/services/fetchInstance";
import { TResponseTechList } from "@/types/userTypes";

const getTechList = async (): Promise<string[] | []> => {
  try {
    const data: TResponseTechList = await fetchInstance.get("/tech");
    return data.result?.skillStacks || [];
  } catch (error) {
    return [];
  }
};

export { getTechList };
