import React from 'react';
import { Chat } from '../types';
import ChatItem from './ChatItem';

export interface ChatListProps {
  data: Chat[];
}

const ChatList: React.VFC<ChatListProps> = (props) => {
  const items = props.data.map((chat) => <ChatItem data={chat} />);

  return <>{items}</>;
};

export default ChatList;
