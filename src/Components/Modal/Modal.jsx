import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

function Modal({ setIsOpen }) {

  function handleSent(e) {
    e.preventDefault();

    let sendBtn = document.getElementById("send");
    sendBtn.innerHTML = "&#10003;";

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Really...</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Are you sure you want to send this email?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.sendBtn}
                onClick={handleSent}
                id="send"
              >
                Yes
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
