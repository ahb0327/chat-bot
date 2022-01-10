/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import React, { useState } from 'react';
import {
  BsFillArrowRightCircleFill,
  BsFillPlusSquareFill,
} from 'react-icons/bs';

export interface InputFormProps {
  onSubmit: (message: string) => void;
}

const InputForm: React.VFC<InputFormProps> = (props) => {
  const [input, setInput] = useState('너는 이름이 뭐야?');

  return (
    <form
      css={css({
        display: 'flex',
        padding: 12,
        background: 'white',
      })}
      onSubmit={(event) => {
        event.preventDefault();

        if (!input) {
          return;
        }

        props.onSubmit(input);

        setInput('');
      }}
    >
      <BsFillPlusSquareFill size="1.5em" />
      <input
        css={css({
          flex: 1,
          marginLeft: 12,
          border: 'none',
          background: 'transparent',
          fontsize: '1.5em',
          '&:focus': { outline: 'none' },
        })}
        autoFocus
        value={input}
        onChange={({ target: { value } }) => {
          setInput(value);
        }}
      />
      <button
        css={css({
          display: 'flex',
          alignItems: 'center',
          padding: 0,
          border: 'none',
          background: 'transparent',
        })}
        type="submit"
      >
        <BsFillArrowRightCircleFill size="1.5em" />
      </button>
    </form>
  );
};

export default InputForm;
