import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './styles.module.css';

const modalWindow = document.getElementById('modal-root');

const Modal = ({ toggleModal, children, bookdata}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') toggleModal();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) toggleModal();
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        {children}
      </div>
    </div>,
    modalWindow
  );
};

export default Modal;
