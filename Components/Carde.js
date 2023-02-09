import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add_post, delete_post, update_post } from '../redux/Action/PostAction';
import { Modal, Form } from 'react-bootstrap';
const Carde = ({el}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [body,setBody]=useState("");
  const [createdAt,setCreatedAt]=useState("");
  const [id,setId]=useState(Math.random());
  const [imageUrl, setImageUrl]=useState("");
  const [namee,setNamee]=useState("");
  const [title, setTitle]=useState("");
  const [video, setVideo]=useState("");
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.imageUrl} />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
        {el.body}
      </Card.Text>
      <Button onClick={()=>dispatch(delete_post(el.id))}>delete</Button>
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
          <Button variant="primary"  onClick={()=>dispatch(update_post(el.id,{title,namee,imageUrl,createdAt,body,video}),handleClose())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Carde