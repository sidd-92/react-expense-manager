import React from "react";
import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
let ToastContainer = props => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "absolute",
        top: "0px",
        margin: "10px",
        right: "0px",
        minHeight: "100px"
      }}
    >
      <Toast
        style={{ backgroundColor: "#378B29", color: "white" }}
        onClose={() => props.closeToast()}
        show={props.showToast}
        delay={1000}
        autohide
      >
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastContainer;
