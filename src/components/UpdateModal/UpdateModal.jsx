import React,{ Button, useState } from 'react';
import { Modal } from 'bootstrap';
import {render} from 'react-dom'



function UpdateModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
  
  
  
    return (
        <div>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
  
}

render(<UpdateModal/>)

export default UpdateModal;