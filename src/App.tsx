/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react/macro';
import React, { useState } from 'react';
import ChatList from './components/ChatList';
import InputForm from './components/InputForm';
import TitleBar from './components/TitleBar';
import { Chat } from './types';

const App: React.VFC = () => {
  const [data, setData] = useState<Chat[]>([
    {
      sender: 'bot',
      time: new Date(),
      message: '안녕하세요. 무엇을 도와드릴까요?',
    },
  ]);

  return (
    <>
      <div css={css({ display: 'flex', flexFlow: 'column', height: '100%' })}>
        <TitleBar />
        <ChatList data={data} />
        <InputForm
          onSubmit={(message) => {
            setData((value) => [
              ...value,
              { sender: 'user', time: new Date(), message },
            ]);

            if (message === '너는 이름이 뭐야?') {
              setData((value) => [
                ...value,
                {
                  sender: 'bot',
                  time: new Date(),
                  message: '저의 이름은 아직 정해지지 않았습니다.',
                },
              ]);
            }
          }}
        />
      </div>
      <Global
        styles={{
          body: { height: '100vh', background: 'black' },
          '#root': { height: '100%' },
        }}
      />
    </>
  );
};

export default App;
