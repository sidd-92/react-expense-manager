import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import _capitalize from "lodash/capitalize";
import { connect } from "react-redux";
import moment from "moment";
import { editExpense, getCategories } from "../store/actions";
const mapStateToProps = state => {
  //console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    getListOfCategories: () => {
      dispatch(getCategories());
    },
    editAnExpense: (expenseData, id, index) => {
      dispatch(editExpense(expenseData, id, index));
    }
  };
};

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      itemName: "",
      itemPrice: this.props.selectedForEdit["exp"]
        ? this.props.selectedForEdit["exp"]["itemAmount"]
        : "",
      currentSelectValue: "",
      dateValue: "",
      itemNameError: false,
      itemPriceError: false
    };
  }
  componentDidMount() {
    this.props.getListOfCategories();
  }
  saveData = (exp, index) => {
    //console.log("props", exp._id, index);
    this.props.editAnExpense(exp, exp._id, index);
  };

  changeItemName = e => {
    this.setState({ itemName: e.target.value });
  };
  changeItemPrice = e => {
    this.setState({ itemPrice: e.target.value });
  };
  selectCategory = obj => {
    console.log(obj);
    this.setState({ currentSelectValue: obj.value });
  };
  dateChange = date => {
    this.setState({
      dateValue: date
    });
  };
  onSave = (e, id, index) => {
    console.log(
      "CONVERTED",
      moment.isDate(this.props.selectedForEdit.exp["expenseDate"])
    );
    let expenseObj = {
      itemName:
        this.state.itemName === ""
          ? this.props.selectedForEdit.exp["itemName"]
          : this.state.itemName,
      itemAmount:
        this.state.itemPrice === ""
          ? this.props.selectedForEdit.exp["itemAmount"]
          : this.state.itemPrice,
      category:
        this.state.currentSelectValue === ""
          ? this.props.category["label"]
          : _capitalize(this.state.currentSelectValue),
      expenseDate:
        this.state.dateValue === ""
          ? this.props.selectedForEdit.exp["expenseDate"]
          : new Date(this.state.dateValue)
    };
    this.setState(
      { itemPriceError: false, itemNameError: false, updateExpense: true },
      () => {
        this.props.editAnExpense(expenseObj, id, index);
      }
    );
    setTimeout(() => {
      this.props.onSave();
      this.props.onHide();
    }, 400);
  };
  resetValues = () => {
    this.setState(
      {
        itemName: "",
        itemPrice: "",
        currentSelectValue: "",
        dateValue: ""
      },
      () => this.props.onHide()
    );
  };
  render() {
    let { exp, index } = this.props.selectedForEdit;
    let { category } = this.props;
    let categoriesExist =
      this.props.reduxState.categories &&
      this.props.reduxState.categories.length > 0;
    const customStyles = {
      control: () => ({
        display: "flex",
        width: "480px",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px"
      })
    };
    return (
      <Modal
        onHide={this.props.onHide}
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a New Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  value={this.state.itemName}
                  onChange={e => this.changeItemName(e)}
                  type="text"
                  placeholder={exp && exp.itemName}
                />
                {this.state.itemNameError && (
                  <Form.Text className="text-danger">
                    Item Name Cannot Be Empty
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Item Price</Form.Label>
                <Form.Control
                  value={this.state.itemPrice}
                  onChange={e => this.changeItemPrice(e)}
                  type="number"
                  placeholder={exp && `${exp["itemAmount"]}`}
                />
                {this.state.itemPriceError && (
                  <Form.Text className="text-danger">
                    Enter a Valid Price
                  </Form.Text>
                )}
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Category</Form.Label>
              <Select
                onChange={obj => this.selectCategory(obj)}
                value={
                  this.state.currentSelectValue === ""
                    ? exp && exp["category"]
                    : this.props.reduxState.categories[0][
                        this.state.currentSelectValue
                      ]
                }
                styles={customStyles}
                options={
                  categoriesExist ? this.props.reduxState.categories : []
                }
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Item Expense Date</Form.Label>
              <br />
              <DatePicker
                className="dateBox"
                selected={this.state.dateValue}
                onChange={this.dateChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={e => this.onSave(e, exp._id, index)}
          >
            Submit
          </Button>
          <Button variant="danger" onClick={this.resetValues}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyVerticallyCenteredModal);
