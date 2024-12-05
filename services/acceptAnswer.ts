import fetchInstance from "@/services/fetchInstance";

type acceptAnswerRequestProps = {
  questionId: number;
  answerId: number;
  review: "EASY" | "USEFUL" | "HELPFUL";
};

type acceptAnswerResponseProps = Promise<{
  message: string;
  result: { id: number };
}>;

const acceptAnswer = async ({ questionId, answerId, review }: acceptAnswerRequestProps): acceptAnswerResponseProps => {
  try {
    const data = await fetchInstance.patch("/question/accept", { questionId, answerId, review });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default acceptAnswer;
