/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import React from 'react';
import { Chat } from '../types';
import ChatItem from './ChatItem';

export interface ChatListProps {
  data: Chat[];
}

const ChatList: React.VFC<ChatListProps> = (props) => {
  const items = props.data.map((chat) => <ChatItem data={chat} />);

  return <div css={css({ flex: 1 })}>{items}</div>;
};

export default ChatList;
