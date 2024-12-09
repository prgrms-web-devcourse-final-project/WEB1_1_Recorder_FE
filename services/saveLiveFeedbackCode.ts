import fetchInstance from "@/services/fetchInstance";

type saveLiveFeedbackCodeRequestProps = {
  docId: string;
  content: string;
};

type saveLiveFeedbackCodeResponseProps = Promise<{
  message: string;
  result: number;
}>;

const saveLiveFeedbackCode = async ({
  docId,
  content
}: saveLiveFeedbackCodeRequestProps): saveLiveFeedbackCodeResponseProps => {
  try {
    const data = await fetchInstance.patch(`/feedback-code/auto/${docId}`, { content });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default saveLiveFeedbackCode;
