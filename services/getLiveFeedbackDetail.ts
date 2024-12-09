import fetchInstance from "@/services/fetchInstance";
import { TLiveFeedbackDetail } from "@/types/reviewTypes";

type getLiveFeedbackDetailRequestProps = {
  id: string;
};

type getLiveFeedbackDetailResponseProps = Promise<{
  message: string;
  result: TLiveFeedbackDetail;
}>;

const getLiveFeedbackDetail = async ({ id }: getLiveFeedbackDetailRequestProps): getLiveFeedbackDetailResponseProps => {
  try {
    const data = await fetchInstance.get(`/feedback/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getLiveFeedbackDetail;
