import React, { useState } from "react";
import Modal from ".";

export const ExampleModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <h1>Parent container</h1>
      <h3>This is just a demo container</h3>
      <button
        className="modal-trigger"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        Open modal
      </button>

      {/* The description is optional - if none in modal, you don't need the aria-describedby */}
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Header>
            <h1 id="modalTitle" className="modal-title">
              modal Title
            </h1>
            <p id="modalDescription">modal Description</p>
          </Modal.Header>
          <Modal.Content>
            <nav>
              <ul>
                <li>
                  <a href="one.html">Link One</a>
                </li>
                <li>
                  <a href="two.html">Link Two</a>
                </li>
                <li>
                  <a href="three.html">Link Three</a>
                </li>
              </ul>
            </nav>
            <p>I am modal content!</p>
          </Modal.Content>
          <Modal.Footer>
            <Modal.Footer.Button buttonText="Close" />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
