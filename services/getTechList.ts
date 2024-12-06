import fetchInstance from "@/services/fetchInstance";
import { TResponseTechList } from "@/types/userTypes";

const getTechList = async () => {
  try {
    const data: TResponseTechList = await fetchInstance.get("/tech", {}, false);
    return data.result?.skillStacks || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getTechList };
