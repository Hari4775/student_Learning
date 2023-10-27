import React from "react";
import "./delete-modal.scss";

// icons
import { ReactComponent as TrashIcon } from "../../../assets/icons/icon-trash.svg";
import { ReactComponent as CircleCloseIcon } from "../../../assets/icons/icon-close-circle.svg";

const DeleteModal = () => {
  return (
    <div>
      <div
        className="modal fade delete-modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <span className="trash-circle-icon">
                <TrashIcon />
              </span>
              <button
                className="close-modal-btn"
                data-bs-dismiss="modal"
                // onClick={() => showModal(false)}
              >
                <CircleCloseIcon />
              </button>
            </div>
            <div className="modal-body">
              <h4 className="modal-title">Are you sure you want to delete?</h4>
              <p className="modal-desc">
                All lectures, tests and notes with this subject will be
                permanently deleted.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-danger"
                // data-bs-dismiss="modal"
                // onClick={onConfirm}
              >
                <span className="me-2">
                  <TrashIcon />
                </span>
                Delete
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-black close-modal-btn"
                data-bs-dismiss="modal"
                // onClick={() => showModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
