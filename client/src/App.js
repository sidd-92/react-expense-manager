import React from "react";
import AnalyticsCard from "./components/AnalyticsCard";
import ExpenseList from "./components/ExpenseList";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { createNewExpense, getCategories, getBudget } from "./store/actions";
import Modal from "react-bootstrap/Modal";
import "./App.css";
const mapStateToProps = state => {
  //console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    addNewExpense: data => {
      dispatch(createNewExpense(data));
    },
    getListOfCategories: () => {
      dispatch(getCategories());
    },
    getUpdatedBudget: () => {
      dispatch(getBudget());
    }
  };
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      itemName: "",
      itemPrice: 0,
      currentSelectValue: "chocolate"
    };
  }
  componentDidMount() {
    this.props.getUpdatedBudget();
    //console.log("REDUX STATE", this.props.reduxState);
  }
  onHide = () => {
    this.setState({ showModal: false });
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
        width: "100%",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "4px"
      })
    };
    return (
      <div>
        <AnalyticsCard totalBudget={this.props.reduxState.totalBudget} />
        <div>
          <Button
            onClick={() => this.setState({ showModal: true })}
            className="addExpenseButton"
            variant="primary"
          >
            Add Expense
          </Button>
        </div>
        <ExpenseList />
        <Modal
          onHide={this.onHide}
          show={this.state.showModal}
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
                    placeholder="Enter Item Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Item Price</Form.Label>
                  <Form.Control
                    value={this.state.itemPrice}
                    onChange={e => this.changeItemPrice(e)}
                    type="number"
                    placeholder="Enter Item Price"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Category</Form.Label>
                <Select
                  onChange={obj => this.selectCategory(obj)}
                  value={options[0][this.state.currentSelectValue]}
                  styles={customStyles}
                  options={
                    categoriesExist ? this.props.reduxState.categories : options
                  }
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Item Expense Date</Form.Label>
                <Form.Control type="date" placeholder="Enter a Date" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              onClick={() => console.log("expense", this.state)}
            >
              Submit
            </Button>
            <Button variant="danger" onClick={this.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
