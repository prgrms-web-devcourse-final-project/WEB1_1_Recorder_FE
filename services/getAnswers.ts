import fetchInstance from "@/services/fetchInstance";
import { TAnswer } from "@/types/reviewTypes";

type getAnswersRequestProps = {
  questionId: number;
};

type getAnswersResponseProps = Promise<{
  message: string;
  result: TAnswer[];
}>;

const getAnswers = async ({ questionId }: getAnswersRequestProps): getAnswersResponseProps => {
  try {
    const data = await fetchInstance.get("/answer", { questionId: questionId });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getAnswers;
