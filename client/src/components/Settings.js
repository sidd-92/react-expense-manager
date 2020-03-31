import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CategoryList from "./CategoryList/CategoryList";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import {
  addCategories,
  getCategories,
  getBudget,
  createBudget,
  deleteACategory
} from "../store/actions";
import ToastContainer from "./Toast";
import ModalBody from "react-bootstrap/ModalBody";

const mapStateToProps = state => {
  console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    addCategory: categoryObj => {
      dispatch(addCategories(categoryObj));
    },
    getListOfCategories: () => {
      dispatch(getCategories());
    },
    getCurrentBudget: () => {
      dispatch(getBudget());
    },
    createANewBudget: totalBudget => {
      dispatch(createBudget(totalBudget));
    },
    deleteCategory: id => {
      dispatch(deleteACategory(id));
    }
  };
};
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryText: "",
      textError: "",
      showToast: false,
      budget: "",
      currentBudget: 0,
      showModal: false,
      categoryToDelete: {}
    };
  }
  componentDidMount() {
    this.props.getListOfCategories();
    this.props.getCurrentBudget();
  }
  handleCategoryInput = e => {
    this.setState({ categoryText: e.target.value });
  };
  addACategory = e => {
    if (this.state.categoryText.length > 0) {
      let obj = {
        label: this.state.categoryText,
        value: this.state.categoryText.toLowerCase()
      };
      this.props.addCategory(obj);
      this.setState({ textError: "", categoryText: "", showToast: true });
      setTimeout(() => {
        this.props.getListOfCategories();
      }, 300);
    } else {
      this.setState({ textError: "Field Cannot Be Empty" });
    }
  };
  closeToast = () => {
    this.setState({ showToast: false });
  };
  changeInputTotalBudget = e => {
    this.setState({ budget: e.target.value });
  };
  updateBudget = e => {
    if (this.state.budget.length > 0) {
      this.props.createANewBudget(this.state.budget);
      if (true) {
        this.setState({ budget: "" }, () => {
          setTimeout(() => {
            this.props.getCurrentBudget();
          }, 100);
        });
      }
    }
  };

  deleteCategory = obj => {
    this.setState({ showModal: true, categoryToDelete: obj });
  };
  confirmDelete = obj => {
    let { _id } = obj;
    this.props.deleteCategory(_id);
    setTimeout(() => {
      this.props.getListOfCategories();
      this.setState({ categoryToDelete: {}, showModal: false });
    }, 300);
    console.log(obj, "DELETE");
  };
  onHide = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ fontSize: "18px" }}>
          <h3>Settings</h3>
          <ToastContainer
            showToast={this.state.showToast}
            closeToast={() => this.closeToast()}
            message={"Category Was Added"}
          />
          <div style={{ marginTop: "30px" }}>
            <Container>
              <div className="inputSingleLine">
                <p>Total Budget</p>
                <input
                  value={this.state.budget}
                  placeholder={this.props.reduxState.totalBudget}
                  onChange={e => this.changeInputTotalBudget(e)}
                  type="number"
                  className="inputBox"
                />
                <Button onClick={e => this.updateBudget(e)}>Update</Button>
              </div>
              <div className="inputSingleLine">
                <p style={{ marginRight: "23px" }}>Categories</p>
                <input
                  onChange={e => this.handleCategoryInput(e)}
                  value={this.state.categoryText}
                  type="text"
                  className="inputBox"
                />
                <Button onClick={e => this.addACategory(e)}>Add</Button>
              </div>
            </Container>
            <Container>
              <CategoryList
                deleteCategory={this.deleteCategory}
                categoryList={this.props.reduxState.categories}
              />
            </Container>
          </div>
        </div>
        <Modal onHide={this.onHide} show={this.state.showModal} size="md">
          <ModalBody>
            <p>
              Are You Sure You Want to Delete{" "}
              <b>
                {this.state.categoryToDelete &&
                  this.state.categoryToDelete["label"]}{" "}
              </b>
              ?
            </p>
            <div style={{ display: "flex" }}>
              <Button
                onClick={() => this.confirmDelete(this.state.categoryToDelete)}
                variant="primary"
              >
                Yes
              </Button>
              <Button
                onClick={() =>
                  this.setState({ categoryToDelete: {}, showModal: false })
                }
                className="ml-auto"
                variant="danger"
              >
                No
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
