import React from 'react';
import cardCss from '../../assets/css/Card.module.css';

type CardProps = {
  children: React.ReactNode;
  className: string;
};

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`${cardCss.card} ${className}`}>{children}</div>;
};

export default Card;
