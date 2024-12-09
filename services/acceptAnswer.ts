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
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("에러가 발생하였습니다.");
    }
  }
};

export default acceptAnswer;
