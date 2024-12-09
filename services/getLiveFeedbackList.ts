import fetchInstance from "@/services/fetchInstance";
import { TLiveFeedbackList } from "@/types/reviewTypes";

type getLiveFeedbackListResponseProps = Promise<{
  message: string;
  result: TLiveFeedbackList[];
}>;

const getLiveFeedbackList = async (): getLiveFeedbackListResponseProps => {
  try {
    const data = await fetchInstance.get("/feedback/submitted/waiting");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getLiveFeedbackList;
