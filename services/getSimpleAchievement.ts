import fetchInstance from "@/services/fetchInstance";
import { TResponseSimpleAchivement } from "@/types/achievmentTypes";

const getSimpleAchievement = async (): Promise<{
  total: number;
  achieved: number;
} | null> => {
  try {
    const data: TResponseSimpleAchivement = await fetchInstance.get("/achievement/user/simple-info");
    return data.result;
  } catch (error) {
    return null;
  }
};
export { getSimpleAchievement };
