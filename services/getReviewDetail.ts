import fetchInstance from "@/services/fetchInstance";
import { TReviewDetail } from "@/types/reviewTypes";

type getReviewDetailRequestProps = {
  id: number;
};

type getReviewDetailResponseProps = Promise<{
  message: string;
  result: TReviewDetail;
}>;

const getReviewDetail = async ({ id }: getReviewDetailRequestProps): getReviewDetailResponseProps => {
  try {
    const data = await fetchInstance.get("/question", { id: id });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getReviewDetail;
