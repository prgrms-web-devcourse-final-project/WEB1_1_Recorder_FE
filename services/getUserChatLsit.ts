import fetchInstance from "@/services/fetchInstance";
import { TResponseChatList } from "@/types/charTypes";

const getUserCharList = async () => {
  try {
    const data: TResponseChatList = await fetchInstance.get("/chat/room/my");
    return data.result || [];
  } catch (error) {
    return [];
  }
};

export { getUserCharList };
