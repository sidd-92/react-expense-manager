import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
class Settings extends React.Component {
  render() {
    return (
      <div style={{ fontSize: "18px" }}>
        <h3>Settings</h3>
        <div style={{ marginTop: "30px" }}>
          <Container>
            <div className="inputSingleLine">
              <p>Total Budget</p>
              <input type="text" className="inputBox" />
              <Button>Update</Button>
            </div>
            <div className="inputSingleLine">
              <p style={{ marginRight: "23px" }}>Categories</p>
              <input type="text" className="inputBox" />
              <Button>Add</Button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Settings;
