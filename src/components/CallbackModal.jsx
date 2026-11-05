import { Button, Modal } from "react-bootstrap";
import { useCallbackModal } from "../context/CallbackModalContext";

export default function CallbackModal() {
  const { show, closeModal } = useCallbackModal();

  return (
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Request received</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center py-4">
        <div className="success-tick" aria-hidden="true">✓</div>
        <p className="mb-0 fw-semibold">Thank you! Our counsellor will call you back shortly.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-indigo" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
