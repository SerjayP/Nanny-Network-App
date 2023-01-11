import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function Postings() {
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchPostings = async () => {
      const allPosts = await fetch("/posting");
      const data = await allPosts.json();
      setPosts(data);
    };
    fetchPostings();
  }, []);

  // ========= UPDATE ===========

  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    evt.preventDefault();
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/posting/update/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();

    window.location.reload();
  };

  return (
    <div>
      <h1 className="titleOnPosting">Postings:</h1>
      <Link
        to="/bookus"
        style={{
          textDecoration: "none",
          paddingLeft: "10px",
          backgroundColor: "white",
        }}
      >
        <button className="glow-on-hover3">Book Us!</button>
      </Link>

      {/* =============   Modal for the Update Custom order ============= */}
      <div className="update">
        <Modal
          className="editArea"
          show={show}
          onHide={handleClose}
          animation={true}
        >
          <Modal.Header className="modal-body">
            <h1>Edit your sitter request:</h1>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Form>
              <Form.Group>
                <h3>Parent Name:</h3>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Parent Name"
                  name="parentName"
                  value={updatedPost.parentName ? updatedPost.parentName : ""}
                  onChange={handleChange}
                  required
                />
                <h3>Parent Phone Number:</h3>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Phone Number"
                  name="contactNumber"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={
                    updatedPost.contactNumber ? updatedPost.contactNumber : ""
                  }
                  onChange={handleChange}
                  required
                />
                <h3>Parent Email Address:</h3>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Email"
                  name="contactEmail"
                  type="email"
                  value={
                    updatedPost.contactEmail ? updatedPost.contactEmail : ""
                  }
                  onChange={handleChange}
                  required
                />
                <h3>Number of Children:</h3>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Number of children"
                  name="numberOfChildren"
                  type="number"
                  value={
                    updatedPost.numberOfChildren
                      ? updatedPost.numberOfChildren
                      : ""
                  }
                  onChange={handleChange}
                  required
                />
                <h3>Age of Children:</h3>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Age of children"
                  name="ageOfChildren"
                  value={
                    updatedPost.ageOfChildren ? updatedPost.ageOfChildren : ""
                  }
                  onChange={handleChange}
                  required
                />
                <h3>Date service needed:</h3>
                <Form.Control
                  style={{ marginBottom: "1rem" }}
                  placeholder="Date"
                  name="date"
                  type={"datetime-local"}
                  value={updatedPost.date ? updatedPost.date : ""}
                  onChange={handleChange}
                  required
                />
                <br></br>
                <small>*Date reamins the same unless changed*</small>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#ff5f1fa7" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button className="glow-on-hover1" onClick={saveUpdatedPost}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* =========== Show postings ============== */}
      <div style={{ padding: "10px" }}>
        <Row xs={1} md={3} className="g-4">
          {posts.map((post, idx) => (
            <Col>
              <Card  border="primary" className="postBox h-100">
                <Card.Body>
                  <Card.Title className="h-20">
                    <strong>{post.parentName}</strong> is looking for a Nanny 👀
                  </Card.Title>
                  <Card.Title className="h-20">
                    <strong>Date of Service: </strong>
                    {moment(post.date).format(" MMM Do, h:mma")}
                  </Card.Title>
                  <Card.Text className="h-40">
                    <strong>Parent Number:</strong> {post.contactNumber}{" "}
                    <br></br>
                    <strong>Parent Email:</strong> {post.contactEmail}
                    <br></br>
                    <strong>Number of Children: </strong>
                    {post.numberOfChildren}
                    <br></br>
                    <strong>Age of Children: </strong>
                    {post.ageOfChildren}
                    <br></br>
                    <strong>Location: </strong>
                    {post.location}
                  </Card.Text >
                  <Card.Footer >
                  <div style={{display: 'flex',  justifyContent: 'space-around'}}>
                    <button
                      className="glow-on-hover4"
                      onClick={() => updatePost(post)}
                    >
                      Edit
                    </button> &nbsp; &nbsp; &nbsp;
                    <form
                      action={`/posting/${post._id}?_method=DELETE`}
                      method="POST"
                    >
                      <button
                        className="glow-on-hover4"
                      >
                        Delete
                      </button>
                    </form>
                    </div>
                    </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
