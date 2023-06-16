// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import css from '../styles/styles.module.css';
// import PropTypes from 'prop-types';

// const modalWindow = document.getElementById('root-modal');

// const Modal = ({ img, toggleModal }) => {
//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.code === 'Escape') toggleModal();
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [toggleModal]);

//   const handleBackdropClick = evt => {
//     if (evt.target === evt.currentTarget) toggleModal();
//   };

//   return createPortal(
//     <div className={css.Overlay} onClick={handleBackdropClick}>
//       <div className={css.Modal}>
//         <img src={img} alt="" />
//       </div>
//     </div>,
//     modalWindow
//   );
// };

// export default Modal;