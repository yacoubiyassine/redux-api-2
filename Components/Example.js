import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { add_post, get_post } from '../redux/Action/PostAction';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [body,setBody]=useState("");
  const [createdAt,setCreatedAt]=useState("");
  const [id,setId]=useState(Math.random());
  const [imageUrl, setImageUrl]=useState("");
  const [namee,setNamee]=useState("");
  const [title, setTitle]=useState("");
  const [video, setVideo]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch (get_post())
  }, [dispatch])
  const posts = useSelector((state)=>state.post);
  console.log(posts);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter image url"
                autoFocus
                value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter title"
                value={title}
                autoFocus
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter body"
                value={body}
                autoFocus
                onChange={(e)=>setBody(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={()=>dispatch(add_post({id,title,namee,imageUrl,createdAt,body,video}),handleClose())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Example;