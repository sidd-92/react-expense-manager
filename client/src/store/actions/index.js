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
  ADD_CATEGORY_STARTED,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_BUDGET_STARTED,
  GET_BUDGET_SUCCESS,
  GET_BUDGET_FAILURE,
  EDIT_BUDGET_STARTED,
  EDIT_BUDGET_SUCCESS,
  EDIT_EXPENSE_FAILURE,
  EDIT_BUDGET_FAILURE
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

//EXPENSE GET REQUESTS
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

export const editBudget = totalBudget => {
  return dispatch => {
    dispatch(editBudgetStarted());

    axios
      .post(`/api/budget`, { totalBudget: totalBudget })
      .then(res => {
        dispatch(editBudgetSuccess(res.data));
      })
      .catch(err => {
        dispatch(editBudgetFailure(err.message));
      });
  };
};

const editBudgetStarted = () => ({
  type: EDIT_BUDGET_STARTED
});

const editBudgetSuccess = totalBudget => ({
  type: EDIT_BUDGET_SUCCESS,
  payload: {
    ...totalBudget
  }
});

const editBudgetFailure = error => ({
  type: EDIT_BUDGET_FAILURE,
  payload: {
    error
  }
});

/* 
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getArticle(payload) {
  return { type: GET_ARTICLE_BY_INDEX, payload };
}

export function getAllArticles(payload) {
  return { type: GET_ALL_ARTICLES, payload };
}

export const addTodo = ({ title, userId }) => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        userId,
        completed: false
      })
      .then(res => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

const addTodoStarted = () => ({
  type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error
  }
});

export const getAuthors = () => {
  return dispatch => {
    dispatch(getAuthorsStarted());
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        dispatch(getAuthorsSucess(res.data));
      })
      .catch(err => {
        dispatch(getAuthorsFailure(err.message));
      });
  };
};
const getAuthorsSucess = authors => ({
  type: GET_AUTHORS_SUCESS,
  payload: authors
});

const getAuthorsStarted = () => ({
  type: GET_AUTHORS_STARTED
});

const getAuthorsFailure = error => ({
  type: GET_AUTHORS_FAILURE,
  payload: {
    error
  }
});
 */
