export type TResponseChatList = {
  message: string;
  result: ChatListItem[];
};

export type ChatListItem = {
  opponentId: number;
  latestMessage: string;
  createdAt: string;
};
