import "./modal.css";

export const Modal = ({ setShowModal, children, title }) => {
  const styledOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
  };

  return (
    <div
      style={styledOverlay}
      className="overlay d-flex align-items-center justify-content-center">
      <div className="my-modal w-75 bg-light p-5 position-relative">
        <div className="modal-header">
          <p className="fs-4">{title}</p>
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-dark position-absolute top-0 end-0 rounded-0">
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
