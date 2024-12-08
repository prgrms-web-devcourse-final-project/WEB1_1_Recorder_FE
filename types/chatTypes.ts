export type TResponseChatList = {
  message: string;
  result: ChatListItem[];
};

export type ChatListItem = {
  opponentId: number;
  latestMessage: string;
  createdAt: string;
};

export type TRequestChatId = {
  opponentId: string;
};
export type TResponseChatId = {
  message: string;
  result: number;
};
