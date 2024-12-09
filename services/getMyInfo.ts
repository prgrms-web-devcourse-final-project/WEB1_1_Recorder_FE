import fetchInstance from "@/services/fetchInstance";

type getMyInfoResponseProps = Promise<{
  message: string;
  result: {
    nickname: string;
    profileImage: string;
    introduction: string;
    businessEmail: string;
    affiliationName: string;
    loginType: string;
    socialId: string;
    totalAnswerCount: number;
    adoptedAnswerCount: number;
  };
}>;

const getMyInfo = async (): getMyInfoResponseProps => {
  try {
    const data = await fetchInstance.get("/user");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default getMyInfo;
