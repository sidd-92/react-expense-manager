import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import { connect } from "react-redux";
import { createNewExpense, getCategories } from "../store/actions";
const mapStateToProps = state => {
  //console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    getListOfCategories: () => {
      dispatch(getCategories());
    }
  };
};

class MyVerticallyCenteredModal extends React.Component {
  componentDidMount() {
    this.props.getListOfCategories();
  }
  render() {
    let categoriesExist =
      this.props.reduxState.categories &&
      this.props.reduxState.categories.length > 0;
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];
    const customStyles = {
      control: () => ({
        display: "flex",
        width: "480px",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px"
      })
    };
    let { itemName } = this.props.selectedForEdit;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Expense {itemName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Edit The Fields You Want to Change</h4>
          <div className="inputSingleLine">
            <p>Item Name</p>
            <input type="text" className="inputBox" />
          </div>
          <div className="inputSingleLine">
            <p>Item Category</p>
            <Select
              styles={customStyles}
              options={
                categoriesExist ? this.props.reduxState.categories : options
              }
            />
          </div>
          <div className="inputSingleLine">
            <p>Item Price</p>
            <input type="text" className="inputBox" />
          </div>
          <div className="inputSingleLine">
            <p>Expense Date</p>
            <input type="date" className="inputBox" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyVerticallyCenteredModal);
