import fetchInstance from "@/services/fetchInstance";

type deleteReviewResponseProps = Promise<{
  message: string;
  result: any;
}>;

const deleteReview = async (id: number): deleteReviewResponseProps => {
  try {
    const data = await fetchInstance.delete("/question", { id: id });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default deleteReview;
