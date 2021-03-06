import {
  GET_EXPENSES_STARTED,
  GET_EXPENSES_SUCESS,
  GET_EXPENSES_FAILURE,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCESS,
  GET_CATEGORIES_FAILURE,
  ADD_EXPENSE_STARTED,
  ADD_EXPENSE_SUCESS,
  ADD_EXPENSE_FAILURE,
  EDIT_EXPENSE_STARTED,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_FAILURE,
  ADD_CATEGORY_STARTED,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_BUDGET_STARTED,
  GET_BUDGET_SUCCESS,
  GET_BUDGET_FAILURE,
  CREATE_BUDGET_STARTED,
  CREATE_BUDGET_SUCCESS,
  CREATE_BUDGET_FAILURE,
  DELETE_CATEGORY_STARTED,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE
} from "./action-types";
import axios from "axios";

//EXPENSE GET REQUESTS
export const getExpenses = () => {
  return dispatch => {
    dispatch(getExpensesStarted());

    axios
      .get(`/api/expenses`)
      .then(res => {
        dispatch(getExpensesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getExpensesFailure(err.message));
      });
  };
};

const getExpensesSuccess = expense => ({
  type: GET_EXPENSES_SUCESS,
  payload: {
    ...expense
  }
});

const getExpensesStarted = () => ({
  type: GET_EXPENSES_STARTED
});

const getExpensesFailure = error => ({
  type: GET_EXPENSES_FAILURE,
  payload: {
    error
  }
});

//EXPENSE POST REQUEST
export const createNewExpense = expenseData => {
  let { itemName, category, itemAmount, expenseDate } = expenseData;
  return dispatch => {
    dispatch(createExpensesStarted());

    axios
      .post(`/api/expenses`, {
        itemName: itemName,
        category: category,
        itemAmount: itemAmount,
        expenseDate: expenseDate
      })
      .then(res => {
        dispatch(createExpensesSuccess(res.data));
      })
      .catch(err => {
        dispatch(createExpensesFailure(err.message));
      });
  };
};

const createExpensesStarted = () => ({
  type: ADD_EXPENSE_STARTED
});

const createExpensesSuccess = expense => ({
  type: ADD_EXPENSE_SUCESS,
  payload: {
    ...expense
  }
});

const createExpensesFailure = error => ({
  type: ADD_EXPENSE_FAILURE,
  payload: {
    error
  }
});

//PATCH A EXPENSE
export const editExpense = (expenseData, id, index) => {
  console.log("EXPENSE", expenseData);
  return dispatch => {
    dispatch(editExpenseStarted());

    axios
      .patch(`/api/expenses/${id}`, expenseData)
      .then(res => {
        dispatch(editExpenseSuccess(res.data, index));
      })
      .catch(err => {
        dispatch(editExpenseFailure(err.message));
      });
  };
};

const editExpenseStarted = () => ({
  type: EDIT_EXPENSE_STARTED
});

const editExpenseSuccess = (expense, index) => ({
  type: EDIT_EXPENSE_SUCCESS,
  payload: {
    ...expense,
    index
  }
});

const editExpenseFailure = error => ({
  type: EDIT_EXPENSE_FAILURE,
  payload: {
    error
  }
});

//GET CATEGORIES

export const getCategories = () => {
  return dispatch => {
    dispatch(getCategoriesStarted());

    axios
      .get(`/api/categories`)
      .then(res => {
        dispatch(getCategoriesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCategoriesFailure(err.message));
      });
  };
};

const getCategoriesStarted = () => ({
  type: GET_CATEGORIES_STARTED
});

const getCategoriesSuccess = expense => ({
  type: GET_CATEGORIES_SUCESS,
  payload: {
    ...expense
  }
});

const getCategoriesFailure = error => ({
  type: GET_CATEGORIES_FAILURE,
  payload: {
    error
  }
});

//ADD CATEGORIES

export const addCategories = ({ label, value }) => {
  return dispatch => {
    dispatch(addCategoryStarted());

    axios
      .post(`/api/categories`, {
        value: value,
        label: label
      })
      .then(res => {
        dispatch(addCategorySuccess(res.data));
      })
      .catch(err => {
        dispatch(addCategoryFailure(err.message));
      });
  };
};

const addCategoryStarted = () => ({
  type: ADD_CATEGORY_STARTED
});

const addCategorySuccess = category => ({
  type: ADD_CATEGORY_SUCCESS,
  payload: {
    ...category
  }
});

const addCategoryFailure = error => ({
  type: ADD_CATEGORY_FAILURE,
  payload: {
    error
  }
});

//GET BUDGET

export const getBudget = () => {
  return dispatch => {
    dispatch(getBudgetStarted());

    axios
      .get(`/api/budget`)
      .then(res => {
        dispatch(getBudgetSuccess(res.data));
      })
      .catch(err => {
        dispatch(getBudgetFailure(err.message));
      });
  };
};

const getBudgetStarted = () => ({
  type: GET_BUDGET_STARTED
});

const getBudgetSuccess = budget => ({
  type: GET_BUDGET_SUCCESS,
  payload: {
    ...budget
  }
});

const getBudgetFailure = error => ({
  type: GET_BUDGET_FAILURE,
  payload: {
    error
  }
});

//POST NEW BUDGET

export const createBudget = totalBudget => {
  return dispatch => {
    dispatch(createBudgetStarted());

    axios
      .post(`/api/budget`, { totalBudget: totalBudget })
      .then(res => {
        dispatch(createBudgetSuccess(res.data));
      })
      .catch(err => {
        dispatch(createBudgetFailure(err.message));
      });
  };
};

const createBudgetStarted = () => ({
  type: CREATE_BUDGET_STARTED
});

const createBudgetSuccess = totalBudget => ({
  type: CREATE_BUDGET_SUCCESS,
  payload: {
    ...totalBudget
  }
});

const createBudgetFailure = error => ({
  type: CREATE_BUDGET_FAILURE,
  payload: {
    error
  }
});

//DELETE A CATEGORY

export const deleteACategory = categoryID => {
  return dispatch => {
    dispatch(deleteACategoryStarted());

    axios
      .delete(`api/categories/${categoryID}`)
      .then(res => {
        dispatch(deleteACategorySuccess(res.data));
      })
      .catch(err => {
        dispatch(deleteACategoryFailure(err.message));
      });
  };
};

const deleteACategoryStarted = () => ({
  type: DELETE_CATEGORY_STARTED
});

const deleteACategorySuccess = response => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: {
    ...response
  }
});

const deleteACategoryFailure = error => ({
  type: DELETE_CATEGORY_FAILURE,
  payload: {
    error
  }
});
