import fetchInstance from "@/services/fetchInstance";

import { LiveFeedbackFormSchema } from "@/types/reviewTypes";

type createLiveFeedbackRequestProps = { requestParams: LiveFeedbackFormSchema & { teacherId: number } };

type createLiveFeedbackResponseProps = Promise<{
  message: string;
  result: number;
}>;

const createLiveFeedback = async ({
  requestParams
}: createLiveFeedbackRequestProps): createLiveFeedbackResponseProps => {
  try {
    const data = await fetchInstance.post("/feedback", requestParams);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default createLiveFeedback;
