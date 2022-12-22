import { useNavigate } from "react-router-dom";
import { Modal, Container, Form, Button } from "react-bootstrap";
import "./DiscussHome.css";

const Discuss = ({ username, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = (e) => {
    e.preventDefault();
    socket.emit("join_room", { username, room });

    if (room !== "" && username !== "") {
      navigate("/chat", { replace: true });
    }
  };

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Container>
        <Modal
          animation={true}
          show={true}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>JOIN ROOM</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={joinRoom}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select
                  className="select"
                  onChange={({ target }) => setRoom(target.value)}
                >
                  <option value="">Select Room</option>
                  <option value="bca">BCA</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: `100%` }}>
                Join Room
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Discuss;
