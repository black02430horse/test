import React from 'react';
import { ButtonProps } from '@mui/material';
import { ButtonComponentStyle } from './index.style';

type ButtonComponentProps = ButtonProps;

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <ButtonComponentStyle {...props}>{children}</ButtonComponentStyle>
  );
};
