import fetchInstance from "@/services/fetchInstance";

type createReviewRequestProps = {
  requestParams: {
    title: string;
    content: string;
    type: "REFACTOR" | "DEBUG";
    stacks: string[];
    codes: { name: string; content: string }[];
    githubLinkReveal?: boolean | undefined;
    githubLink?: string | undefined;
    isAnonymous?: boolean | undefined;
  };
};

type createReviewResponseProps = Promise<{
  message: string;
  result: { id: number };
}>;

const createReview = async ({ requestParams }: createReviewRequestProps): createReviewResponseProps => {
  try {
    const data = await fetchInstance.post("/question", requestParams);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default createReview;
