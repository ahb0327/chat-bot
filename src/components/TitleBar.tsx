/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

const TitleBar = () => {
  return (
    <div
      css={css({
        display: 'flex',
        padding: 12,
        background: 'white',
        fontSize: '1.5em',
      })}
    >
      <BsArrowLeftShort size="1.5em" />
      <div
        css={css({
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        챗봇 이름
      </div>
    </div>
  );
};

export default TitleBar;
