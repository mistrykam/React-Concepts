import React, { useState } from "react";
import Modal from "react-modal";

function ModalClick() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container">
      <Modal isOpen={isOpen} style={{ overlay: { backgroundColor: "grey" } }}>
        <h3>Modal Box</h3>
        <p>This is a modal Box</p>
        <button onClick={() => setOpen(false)}>Close Modal</button>
      </Modal>
      <button onClick={() => setOpen(true)}>Open Modal </button>
    </div>
  );
}

export default ModalClick;
