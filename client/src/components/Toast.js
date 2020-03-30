import React from "react";
import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
let ToastContainer = props => {
  return (
    <Row>
      <Col xs={6}>
        <Toast
          onClose={() => props.closeToast()}
          show={props.showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default ToastContainer;
