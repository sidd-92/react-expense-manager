import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CategoryList from "./CategoryList/CategoryList";
import { connect } from "react-redux";
import {
  addCategories,
  getCategories,
  getBudget,
  editBudget,
  createBudget
} from "../store/actions";
import ToastContainer from "./Toast";

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
      currentBudget: 0
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
    let { _id } = obj;
    console.log(obj, "DELETE");
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ fontSize: "18px" }}>
          <h3>Settings</h3>
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
        <ToastContainer
          showToast={this.state.showToast}
          closeToast={() => this.closeToast()}
        />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
