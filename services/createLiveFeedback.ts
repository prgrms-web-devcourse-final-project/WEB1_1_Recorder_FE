import fetchInstance from "@/services/fetchInstance";

type createLiveFeedbackRequestProps = {
  requestParams: {
    title: string;
    description: string;
    type: "REFACTORING" | "DEBUGGING";
    skillStacks: string[];
    feedbackCodes: {
      name: string;
      content: string;
    }[];
    githubLinkReveal?: boolean | undefined;
    githubLink?: string | undefined;
    teacherId: number;
  };
};

type createLiveFeedbackResponseProps = Promise<{
  message: string;
  result: number;
}>;

const createLiveFeedback = async ({
  requestParams
}: createLiveFeedbackRequestProps): createLiveFeedbackResponseProps => {
  try {
    const data = await fetchInstance.post("/feedback", requestParams);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default createLiveFeedback;
