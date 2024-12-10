export type TResponseChatList = {
  message: string;
  result: ChatListItem[];
};

export type ChatListItem = {
  opponentId: number;
  latestMessage: string;
  createdAt: string;
  opponentNickName: string;
  opponentProfileImage: string;
};

export type TRequestChatId = {
  opponentId: string;
};
export type TResponseChatId = {
  message: string;
  result: number;
};

export type TResponseChatRecord = {
  message: "Success";
  result: TChatRecord[];
};

export type TChatRecord = {
  sender: string;
  content: string;
  createdAt: string;
};

export type Message = { content: string; authorization: string; type: "CHAT"; senderId: string };
