import fetchInstance from "@/services/fetchInstance";

import { AnswerFormSchema } from "@/types/reviewTypes";

type createAnswerRequestProps = { requestParams: AnswerFormSchema & { questionId: number } };

type createAnswerResponseProps = Promise<{
  message: string;
  result: { id: number };
}>;

const createAnswer = async ({ requestParams }: createAnswerRequestProps): createAnswerResponseProps => {
  try {
    const data = await fetchInstance.post("/answer", { ...requestParams, title: "dummy" });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default createAnswer;
