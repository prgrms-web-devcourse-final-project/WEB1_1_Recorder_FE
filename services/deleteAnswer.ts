import fetchInstance from "@/services/fetchInstance";

type deleteAnswerResponseProps = Promise<{
  message: string;
  result: any;
}>;

const deleteAnswer = async (id: number): deleteAnswerResponseProps => {
  try {
    const data = await fetchInstance.delete("/answer", { id: id });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default deleteAnswer;
