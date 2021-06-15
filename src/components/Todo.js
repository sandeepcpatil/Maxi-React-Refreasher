import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    console.log(props.text);
    setModalIsOpen(true);
  }

  function closeModalHandler(params) {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
