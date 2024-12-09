import fetchInstance from "@/services/fetchInstance";
import { TResponseChatId, TResponseChatRecord } from "@/types/chatTypes";

const getChatId = async (params: { opponentId: string }): Promise<TResponseChatId | null> => {
  try {
    const data = await fetchInstance.post("/chat/room", params);
    return data;
  } catch (error) {
    return null;
  }
};

const getChatRecord = async (params: {
  id: string;
  query?: { lastMessageTimestamp?: string; size?: string };
}): Promise<TResponseChatRecord | null> => {
  try {
    const data = await fetchInstance.get(`/chat/${params.id}/messages`, params.query);
    return data;
  } catch (error) {
    return null;
  }
};
export { getChatId, getChatRecord };
