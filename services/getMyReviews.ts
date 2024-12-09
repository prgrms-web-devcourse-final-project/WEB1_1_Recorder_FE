import fetchInstance from "@/services/fetchInstance";
import { TResponseReviewList, TReviewItem } from "@/types/reviewTypes";

const getMyReviews = async (params: { size: string; lastId?: string }) => {
  try {
    const data: TResponseReviewList = await fetchInstance.get("question/my", params);
    return data.result || [];
  } catch (error) {}
};
export { getMyReviews };
