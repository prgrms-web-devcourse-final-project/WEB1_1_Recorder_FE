import fetchInstance from "@/services/fetchInstance";

type getLiveFeedbackCodeRequestProps = {
  docId: string;
};

type getLiveFeedbackCodeResponseProps = Promise<{
  message: string;
  result: {
    name: string;
    content: string;
  };
}>;

const getLiveFeedbackCode = async ({ docId }: getLiveFeedbackCodeRequestProps): getLiveFeedbackCodeResponseProps => {
  try {
    const data = await fetchInstance.get(`/feedback-code/${docId}`);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getLiveFeedbackCode;
