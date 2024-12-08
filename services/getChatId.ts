import fetchInstance from "@/services/fetchInstance";
import { TResponseChatId } from "@/types/chatTypes";

const getChatId = async (params: { opponentId: string }): Promise<TResponseChatId | null> => {
  try {
    const data = await fetchInstance.post("/chat/room", params);
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};

export { getChatId };
