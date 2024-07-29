import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putUpdateUser } from "../service/UserService";
import { ToastContainer, toast } from "react-toastify";

const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleEditUser = async () => {
    try {
      let res = await putUpdateUser(
        dataUserEdit.id,
        first_name,
        last_name,
        email
      );
      console.log("API response:", res);
      if (res) {
        handleEditUserFromModal({
          id: dataUserEdit.id,
          first_name,
          last_name,
          email,
        });
        handleClose();
        toast.success("User updated successfully!");
      } else {
        toast.error("Failed to update user. Please try again.");
        console.log("dataUserEdit.id", dataUserEdit.id);
        console.log("fname", dataUserEdit.first_name);
        console.log("lname", dataUserEdit.last_name);
        console.log("mail", dataUserEdit.email);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (show) {
      setFirstName(dataUserEdit.first_name);
      setLastName(dataUserEdit.last_name);
      setEmail(dataUserEdit.email);
    }
  }, [dataUserEdit, show]);

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
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-add-new">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={first_name}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
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
                  type="text"
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
            <Button variant="primary" onClick={() => handleEditUser()}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalEditUser;
