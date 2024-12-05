import fetchInstance from "@/services/fetchInstance";

import { ReviewFormSchema } from "@/types/reviewTypes";

type createReviewRequestProps = { requestParams: ReviewFormSchema };

type createReviewResponseProps = Promise<{
  message: string;
  result: { id: number };
}>;

const createReview = async ({ requestParams }: createReviewRequestProps): createReviewResponseProps => {
  try {
    const data = await fetchInstance.post("/question", requestParams);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default createReview;
