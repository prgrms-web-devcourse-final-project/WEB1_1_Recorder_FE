import fetchInstance from "@/services/fetchInstance";

type getLiveFeedbackSessionsRequestProps = {
  docId: string;
};

type getLiveFeedbackSessionsResponseProps = Promise<{
  message: string;
  result: number;
}>;

const getLiveFeedbackSessions = async ({
  docId
}: getLiveFeedbackSessionsRequestProps): getLiveFeedbackSessionsResponseProps => {
  try {
    const data = await fetchInstance.get(`/feedback-code/sessions/${docId}`);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getLiveFeedbackSessions;
