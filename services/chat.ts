import fetchInstance from "@/services/fetchInstance";
import { TResponseChatId } from "@/types/chatTypes";
import Cookies from "js-cookie";

const getChatId = async (params: { opponentId: string }): Promise<TResponseChatId | null> => {
  try {
    const data = await fetchInstance.post("/chat/room", params);
    return data;
  } catch (error) {
    return null;
  }
};

export { getChatId };
