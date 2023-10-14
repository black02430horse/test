import React, { useEffect, useRef } from 'react';
import { Box, InputBase, InputProps } from '@mui/material';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { InputComponentStyle } from './index.style';

type InputComponentProps = InputProps & {
  error?: boolean;
  label?: string;
  border?: boolean;
  frontIcon?: React.ReactNode;
  backIcon?: React.ReactNode;
  inputSize?: 'regular' | 'large';
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
};

const defaultProps: Pick<InputComponentProps, 'inputSize'> = {
  inputSize: 'regular',
};

export const InputComponent: React.FC<InputComponentProps> = (props) => {
  props = { ...defaultProps, ...props };

  const { label, frontIcon, backIcon, inputSize, error, name: fieldName, register, options, ...rest } = props;

  const parentRef = useRef<HTMLDivElement>(null);

  const onFocus = () => {
    parentRef.current?.classList.add('focused');
  };

  const onBlur = () => {
    parentRef.current?.classList.remove('focused');
  };

  useEffect(() => {
    if (error) {
      parentRef.current?.classList.add('error');
    } else {
      parentRef.current?.classList.remove('error');
    }
  }, [error]);

  return <InputComponentStyle
    disabled={props.disabled}
    border={props.border}
    error={error}
    inputSize={inputSize!}
    label={label}
  >
    <Box className='text-container' ref={parentRef}>
      {!!label && <Box className='label'>{label}</Box>}
      <InputBase
        className='text'
        {...rest}
        {...(register && register(fieldName!, options))}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Box>
  </InputComponentStyle>
}