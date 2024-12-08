import fetchInstance from "@/services/fetchInstance";
import { TResponseChatList } from "@/types/chatTypes";

const getUserChatList = async () => {
  try {
    const data: TResponseChatList = await fetchInstance.get("/chat/room/my");
    return data.result || [];
  } catch (error) {
    return [];
  }
};

export { getUserChatList };
