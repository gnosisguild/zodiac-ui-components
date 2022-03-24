import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@material-ui/core'

export interface ButtonProps extends MUIButtonProps {
  label: string
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <MUIButton
      {...props}
    >
      {label}
    </MUIButton>
  );
};

export default Button