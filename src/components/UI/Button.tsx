import React, { MouseEventHandler } from 'react';
import buttonCss from '../../assets/css/Button.module.css';

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  buttonOnClick?: MouseEventHandler;
};

const Button: React.FC<ButtonProps> = ({
  buttonType,
  children,
  buttonOnClick,
}) => {
  return (
    <button
      className={buttonCss.button}
      type={buttonType || 'button'}
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
