/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react/macro';
import React from 'react';
import ChatList from './components/ChatList';

const App: React.VFC = () => {
  return (
    <>
      <div css={css({ height: '100%' })}>
        <ChatList
          data={[
            {
              sender: 'bot',
              time: new Date(),
              message: '안녕하세요. 무엇을 도와드릴까요?',
            },
          ]}
        />
        <ChatList
          data={[
            {
              sender: 'user',
              time: new Date(),
              message: '안녕하세요. 무엇을 도와드릴까요?',
            },
          ]}
        />
      </div>
      <Global styles={{ body: { background: 'black' } }} />
    </>
  );
};

export default App;
