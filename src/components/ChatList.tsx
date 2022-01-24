/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import React from 'react';
import { Chat } from '../types';
import ChatItem from './ChatItem';

export interface ChatListProps {
  data: Chat[];
  nickname: string;
}

const ChatList: React.VFC<ChatListProps> = (props) => {
  const items = props.data.map((chat) => (
    <ChatItem data={chat} isMine={chat.nickname === props.nickname} />
  ));

  return <div css={css({ flex: 1, overflowY: 'scroll' })}>{items}</div>;
};

export default ChatList;
