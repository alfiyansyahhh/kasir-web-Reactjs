/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input} from 'reactstrap';

import add from '../svg/add.svg'

const ModalExample = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const test = () => {
    alert('hai')
  }
  return (
    <div>
      <img src={add} alt="" onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Add Item</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={12}>
              <Input type="text" name="name" id="name" placeholder="input product name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="images" sm={2}>Images</Label>
            <Col sm={12}>
              <Input type="text" name="images" id="images" placeholder="input url images" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>Price</Label>
            <Col sm={12}>
              <Input type="text" name="price" id="price" placeholder="input number only" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="category" sm={2}>Category</Label>
            <Col sm={12}>
              <Input type="select" name="category" id="category">
                <option>Foods</option>
                <option>Coffee</option>
                <option>Non Coffee</option>
                <option>Add On</option>
              </Input>
            </Col>
          </FormGroup>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          <Button color="primary" onClick={() => test()}>add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;