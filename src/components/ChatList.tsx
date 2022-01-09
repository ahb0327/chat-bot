import React from 'react';

export interface Chat {
  id: string;
  time: Date;
  message: string;
}

export interface ChatListProps {}

const ChatList: React.VFC = () => {
  return <div></div>;
};

export default ChatList;
