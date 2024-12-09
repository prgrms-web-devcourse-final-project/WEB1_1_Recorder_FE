import fetchInstance from "@/services/fetchInstance";
import { TResponseUserInfo, TUserInfo } from "@/types/userTypes";

const getUserInfo = async (): Promise<TUserInfo | null> => {
  try {
    const data: TResponseUserInfo = await fetchInstance.get("/user");
    return data.result;
  } catch (error) {
    return null;
  }
};
export { getUserInfo };
