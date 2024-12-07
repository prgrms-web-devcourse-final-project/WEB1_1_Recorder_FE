import fetchInstance from "@/services/fetchInstance";

// type signUpRequestProps = {
//   requestParams: {
//     nickname: string;
//     includeData: boolean;
//     profileImage?: string;
//     introduction?: string;
//   };
// };

type signUpResponseProps = Promise<{
  message: string;
  result: {
    nickname: string;
    profileImage: string;
    introduction: string;
  } | null;
}>;

const signUp = async (nickname: string): signUpResponseProps => {
  try {
    const data = await fetchInstance.post("/user", { nickname: nickname, includeData: false });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default signUp;
