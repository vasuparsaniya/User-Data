import React from 'react';
import Card from './Card';
import Button from './Button';
import errorModalCss from '../../assets/css/ErrorModal.module.css';

type ErrorModalProps = {
  errorTitle: string;
  errorMessage: string;
  onConfirm: () => void;
};

const ErrorModal: React.FC<ErrorModalProps> = ({
  errorTitle,
  errorMessage,
  onConfirm,
}) => {
  return (
    <div>
      <div className={errorModalCss.backdrop} onClick={onConfirm}>
        <Card className={errorModalCss.modal}>
          <header className={errorModalCss.header}>
            <h2>{errorTitle}</h2>
          </header>
          <div className={errorModalCss.content}>
            <p>{errorMessage}</p>
          </div>
          <footer className={errorModalCss.actions}>
            <Button buttonType="button" buttonOnClick={onConfirm}>
              Okay
            </Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
