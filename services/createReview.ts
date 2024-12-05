import fetchInstance from "@/services/fetchInstance";

import { ReviewFormSchema } from "@/types/reviewTypes";

const createReview = async ({ requestParams }: { requestParams: ReviewFormSchema }) => {
  try {
    const data = await fetchInstance.post("/question", requestParams);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default createReview;
