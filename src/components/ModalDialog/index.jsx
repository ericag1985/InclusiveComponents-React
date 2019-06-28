import React, { createContext, useContext, useEffect, createRef } from "react";
import { createPortal } from "react-dom";

// Creating a context so that we can use onModalClose in multiple parts of the modal.
const modalContext = createContext();

const Modal = ({ children, onModalClose }) => {
  useEffect(() => {
    // Checks if escape key has been pressed
    const keyListener = e => {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    };

    document.addEventListener("keydown", keyListener);

    // Remove listener on unmount
    return () => document.removeEventListener("keydown", keyListener);
  });

  const modalRef = createRef();

  const handleTabKey = e => {
    const focusableItems = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstFocusableItem = focusableItems[0];
    const lastFocusableItem = focusableItems(focusableItems.length - 1);

    if (!e.shiftKey && document.activeElement !== firstFocusableItem) {
      console.log("true");
      firstFocusableItem.focus();
      return e.preventDefault();
    }

    if (!e.shiftKey && document.activeElement !== lastFocusableItem) {
      lastFocusableItem.focus();
      return e.preventDefault();
    }
  };

  const keyListenersMap = new Map([[27, onModalClose], [9, handleTabKey]]);

  // Using createPortal to allow the modal to be rendered directly int he body of the document
  // regardless of where it is put in the markup.
  return createPortal(
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal-content" ref={modalRef}>
        <modalContext.Provider value={{ onModalClose }}>
          {children}
        </modalContext.Provider>
      </div>
    </div>,
    document.body
  );
};

const Header = ({ children }) => {
  const { onModalClose } = useContext(modalContext);

  return (
    <header>
      <div>{children}</div>
      <button
        className="modal__close--header"
        title="close modal"
        onClick={onModalClose}
      >
        X
      </button>
    </header>
  );
};

const Content = ({ children }) => <section>{children}</section>;

const Footer = ({ children }) => <footer>{children}</footer>;

// Separating the close button in the footer from footer for easier <placement/>
const FooterCloseButton = ({ buttonText }) => {
  const { onModalClose } = useContext(modalContext);

  return (
    <button
      className="modal__close--footer"
      title="close modal"
      onClick={onModalClose}
    >
      {buttonText}
    </button>
  );
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
Modal.Footer.Button = FooterCloseButton;

export default Modal;
