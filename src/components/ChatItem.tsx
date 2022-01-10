/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import { Chat } from '../types';

interface ChatItemProps {
  data: Chat;
}

const botConfig = genConfig();
const userConfig = genConfig();

const ChatItem: React.VFC<ChatItemProps> = (props) => {
  if (props.data.sender === 'bot') {
    return (
      <div css={css({ display: 'flex', flexFlow: 'row', margin: 24 })}>
        <Avatar
          css={css({ width: 40, height: 40, marginRight: 16 })}
          {...botConfig}
        />
        <div
          css={css({
            position: 'relative',
            width: 'fit-content',
            height: 'fit-content',
            maxWidth: 200,
            padding: 12,
            borderRadius: 12,
            background: 'white',
            '&:before': {
              display: 'block',
              position: 'absolute',
              top: 12,
              left: -12,
              content: '""',
              borderTop: '12px solid white',
              borderLeft: '12px solid transparent',
            },
          })}
        >
          {props.data.message}
        </div>
        <div
          css={css({
            height: 'fit-content',
            marginTop: 'auto',
            marginLeft: 4,
            color: 'white',
            fontSize: 12,
          })}
        >
          {props.data.time.toLocaleTimeString()}
        </div>
      </div>
    );
  } else {
    return (
      <div css={css({ display: 'flex', flexFlow: 'row-reverse', margin: 24 })}>
        <Avatar
          css={css({ width: 40, height: 40, marginLeft: 16 })}
          {...userConfig}
        />
        <div
          css={css({
            position: 'relative',
            width: 'fit-content',
            height: 'fit-content',
            maxWidth: 200,
            padding: 12,
            borderRadius: 12,
            background: 'white',
            '&:before': {
              display: 'block',
              position: 'absolute',
              top: 12,
              right: -12,
              content: '""',
              borderTop: '12px solid white',
              borderRight: '12px solid transparent',
            },
          })}
        >
          {props.data.message}
        </div>
        <div
          css={css({
            height: 'fit-content',
            marginTop: 'auto',
            marginRight: 4,
            color: 'white',
            fontSize: 12,
          })}
        >
          {props.data.time.toLocaleTimeString()}
        </div>
      </div>
    );
  }
};

export default ChatItem;
