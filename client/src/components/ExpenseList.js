import React from "react";
import { connect } from "react-redux";
import {
  getExpenses,
  editExpense,
  createNewExpense,
  getCategories,
  getBudget
} from "../store/actions";
import Table from "react-bootstrap/Table";
import PaginationComponent from "./PaginationComponent";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import moment from "moment";
import Form from "react-bootstrap/Form";
import AnalyticsCard from "./AnalyticsCard";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import _capitalize from "lodash/capitalize";
import empty from "../images/poverty.png";

const mapStateToProps = state => {
  //console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    getListOfExpenses: expenses => {
      dispatch(getExpenses(expenses));
    },
    addNewExpense: data => {
      dispatch(createNewExpense(data));
    },
    editAnExpense: (expenseData, id, index) => {
      dispatch(editExpense(expenseData, id, index));
    },
    getListOfCategories: () => {
      dispatch(getCategories());
    },
    getUpdatedBudget: () => {
      dispatch(getBudget());
    }
  };
};
class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModal: false,
      selectedForEdit: {},
      showModal: false,
      itemName: "",
      itemPrice: 0,
      currentSelectValue: "",
      dateValue: Date.now(),
      itemNameError: false,
      updateExpense: false,
      itemPriceError: false,
      editCategory: {}
    };
  }
  componentDidMount() {
    this.props.getListOfExpenses();
  }
  editExpense = (exp, index) => {
    let cats = this.props.reduxState.categories;
    let filtered = cats.filter(
      category => category["label"] === exp["category"]
    );
    console.log("FILTERED", filtered[0]);
    this.setState({
      editModal: true,
      selectedForEdit: {
        exp: exp,
        index: index,
        editCategory: filtered[0]
      }
    });
  };
  deleteExpense = (exp, index) => {
    let { _id } = exp;
    let obj = {
      isDeleted: true
    };
    this.props.editAnExpense(obj, _id, index);
    setTimeout(() => {
      this.props.getListOfExpenses();
    }, 300);
  };

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
  dateChange = date => {
    this.setState({
      dateValue: date
    });
  };
  onSave = () => {
    if (this.state.itemName === "") {
      this.setState({ itemNameError: true });
      return;
    }
    if (this.state.itemPrice <= 0) {
      this.setState({ itemPriceError: true });
      return;
    } else {
      let expenseObj = {
        itemName: this.state.itemName,
        itemAmount: this.state.itemPrice,
        category:
          this.state.currentSelectValue === ""
            ? this.props.reduxState.categories[0].label
            : _capitalize(this.state.currentSelectValue),
        expenseDate: new Date(this.state.dateValue)
      };
      this.setState(
        { itemPriceError: false, itemNameError: false, updateExpense: true },
        () => {
          this.props.addNewExpense(expenseObj);
        }
      );
      setTimeout(() => {
        this.setState({ itemName: "", itemAmount: "" }, () => {
          this.props.getListOfExpenses();
          this.onHide();
        });
      }, 400);
      console.log("OBJ", expenseObj);
    }
  };
  saveDetailsInModal = () => {
    this.props.getListOfExpenses();
  };
  render() {
    let categoriesExist =
      this.props.reduxState.categories &&
      this.props.reduxState.categories.length > 0;
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
      <>
        <AnalyticsCard
          totalExpense={this.props.reduxState.expenses}
          totalBudget={this.props.reduxState.totalBudget}
        />
        <Button
          onClick={() => this.setState({ showModal: true })}
          className="addExpenseButton"
          variant="primary"
        >
          Add Expense
        </Button>
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
                    placeholder="Enter Item Price"
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
                      ? this.props.reduxState.categories[0]
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
            <Button variant="primary" type="submit" onClick={this.onSave}>
              Submit
            </Button>
            <Button variant="danger" onClick={this.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div style={{ padding: "30px" }}>
          {this.props.reduxState &&
          this.props.reduxState.expenses.length > 0 ? (
            <React.Fragment>
              <Table style={{ fontSize: "18px" }} striped borderless hover>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Item Price</th>
                    <th>Expense Date</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.reduxState.expenses.map((exp, index) => (
                    <tr
                      style={{
                        textDecoration: exp.isDeleted ? "line-through" : ""
                      }}
                      key={index}
                    >
                      <td>{exp.itemName}</td>
                      <td>{exp.category}</td>
                      <td>{exp.itemAmount}</td>
                      <td>{moment(exp.expenseDate).format("DD.MM.YYYY")}</td>
                      <td>
                        <Button
                          style={{
                            background: "transparent",
                            outline: "none",
                            color: "black",
                            border: "none",
                            opacity: exp.isDeleted ? "0.2" : "1",
                            cursor: exp.isDeleted ? "default" : "cursor"
                          }}
                          onClick={() =>
                            !exp.isDeleted
                              ? this.editExpense(exp, index)
                              : console.log("Cannot Edit")
                          }
                        >
                          {" "}
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </Button>
                      </td>
                      <td>
                        <Button
                          style={{
                            background: "transparent",
                            outline: "none",
                            color: "black",
                            border: "none",
                            opacity: exp.isDeleted ? "0.2" : "1",
                            cursor: exp.isDeleted ? "default" : "cursor"
                          }}
                          onClick={() =>
                            !exp.isDeleted
                              ? this.deleteExpense(exp, index)
                              : console.log("Already Deleted")
                          }
                        >
                          {" "}
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <PaginationComponent itemArray={[1, 2, 3]} active={1} />
            </React.Fragment>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <img src={empty} alt="empty" className="imageEmpty" />
              <h3>There Are No Expenses, Please "Add Expense"</h3>
            </div>
          )}
        </div>
        <MyVerticallyCenteredModal
          category={this.state.editCategory}
          selectedForEdit={this.state.selectedForEdit}
          show={this.state.editModal}
          onHide={() => this.setState({ editModal: false })}
          onSave={this.saveDetailsInModal}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
