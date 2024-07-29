import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateUser } from "../service/UserService";
import { ToastContainer, toast } from "react-toastify";

const ModalAddNew = (props) => {
  const { show, handleClose, handleUpdateTable } = props;
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSaveUser = async () => {
    let res = await postCreateUser(first_name, last_name, email);
    console.log(res);
    if (res && res.id) {
      handleClose();
      setFirstName("");
      setFirstName("");
      setEmail("");
      toast.success("Create user success");
      handleUpdateTable({
        first_name: first_name,
        last_name: last_name,
        email: email,
        id: res.id,
      });
    } else {
      toast.error("Create user fail");
    }
  };

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-add-new">
              <div className="mb-3">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  class="form-control"
                  value={first_name}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  value={last_name}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div class="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleSaveUser()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalAddNew;
