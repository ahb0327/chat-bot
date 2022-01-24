/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react/macro';
import React, { useEffect, useState } from 'react';
import { useSocket } from 'socket.io-react-hook';
import ChatList from './components/ChatList';
import InputForm from './components/InputForm';
import TitleBar from './components/TitleBar';
import { Chat } from './types';

const App: React.VFC = () => {
  const [data, setData] = useState<Chat[]>([]);
  const [room, setRoom] = useState<string>('Default');
  const [nickname, setNickname] = useState<string>('user');

  const { socket, error } = useSocket('http://localhost:4000');

  useEffect(() => {
    socket.emit('init', room);
  }, [room, socket]);

  useEffect(() => {
    socket.on('init', (data: Chat[]) => {
      setData(data);
    });

    socket.on('chat', (data: Chat) => {
      setData((value) => [...value, data]);
    });
  }, [socket]);

  return (
    <>
      <div css={css({ display: 'flex', flexFlow: 'column', height: '100%' })}>
        <input
          value={room}
          onChange={({ target: { value } }) => setRoom(value)}
        />
        <input
          value={nickname}
          onChange={({ target: { value } }) => setNickname(value)}
        />
        <TitleBar title={room} />
        <ChatList data={data} nickname={nickname} />
        <InputForm
          onSubmit={(message) => {
            socket.emit('chat', {
              room,
              chat: {
                nickname,
                time: Date.now(),
                message,
              },
            });
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
