import React from "react";
import { connect } from "react-redux";
import { getExpenses } from "../store/actions";
import Table from "react-bootstrap/Table";
import PaginationComponent from "./PaginationComponent";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = state => {
  //console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    getListOfExpenses: expenses => {
      dispatch(getExpenses(expenses));
    }
  };
};
class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModal: false,
      selectedForEdit: {}
    };
    this.props.getListOfExpenses();
  }
  componentDidMount() {
    if (this.props.reduxState.isLoading) {
      console.log("CURRENTLY LOADING");
    }
    this.setState({ current: this.props.reduxState });
  }
  editExpense = (exp, index) => {
    this.setState({ editModal: true, selectedForEdit: exp });
  };
  render() {
    return (
      <>
        <div style={{ padding: "30px" }}>
          {
            <Table style={{ fontSize: "18px" }} striped borderless hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Item Price</th>
                  <th>Expense Date</th>
                </tr>
              </thead>
              <tbody>
                {this.props.reduxState &&
                  this.props.reduxState.expenses.map((exp, index) => (
                    <tr>
                      <td>
                        <Button
                          style={{
                            background: "transparent",
                            outline: "none",
                            color: "black",
                            border: "none"
                          }}
                          onClick={() => this.editExpense(exp, index)}
                        >
                          {" "}
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </Button>
                      </td>
                      <td>{exp.itemName}</td>
                      <td>{exp.category}</td>
                      <td>{exp.itemAmount}</td>
                      <td>{exp.expenseDate}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          }
          <PaginationComponent itemArray={[1, 2, 3]} active={1} />
        </div>
        <MyVerticallyCenteredModal
          selectedForEdit={this.state.selectedForEdit}
          show={this.state.editModal}
          onHide={() => this.setState({ editModal: false })}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
