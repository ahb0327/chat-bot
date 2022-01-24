/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

interface TitleBarProps {
  title: string;
}

const TitleBar: React.VFC<TitleBarProps> = (props) => {
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
        {props.title}
      </div>
    </div>
  );
};

export default TitleBar;
