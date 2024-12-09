import fetchInstance from "@/services/fetchInstance";

type signUpRequestProps = {
  formData: {
    nickname: string;
    profileImage?: string;
    introduction?: string;
    stacks: string[];
  };
};

type signUpResponseProps = Promise<{
  message: string;
  result: {
    nickname: string;
    profileImage: string;
    introduction: string;
  } | null;
}>;

const signUp = async ({ formData }: signUpRequestProps): signUpResponseProps => {
  try {
    const { stacks, ...signUpData } = formData;

    const data = await fetchInstance.post("/user", { ...signUpData, includeData: false });
    stacks.map(async (stack) => {
      await fetchInstance.post("/user/tech", { name: stack });
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default signUp;
