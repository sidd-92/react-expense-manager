import {
  GET_EXPENSES_STARTED,
  GET_EXPENSES_SUCESS,
  GET_EXPENSES_FAILURE,
  ADD_EXPENSE_STARTED,
  ADD_EXPENSE_SUCESS,
  ADD_EXPENSE_FAILURE,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCESS,
  GET_CATEGORIES_FAILURE,
  ADD_CATEGORY_STARTED,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_BUDGET_STARTED,
  GET_BUDGET_SUCCESS,
  GET_BUDGET_FAILURE,
  CREATE_BUDGET_STARTED,
  CREATE_BUDGET_SUCCESS,
  CREATE_BUDGET_FAILURE,
  EDIT_EXPENSE_STARTED,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_FAILURE
} from "../actions/action-types";
const initialState = {
  loading: false,
  expenses: [],
  error: null,
  categories: [],
  totalBudget: 0
};
function rootReducer(state = initialState, action) {
  if (action.type === GET_EXPENSES_STARTED) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === GET_EXPENSES_SUCESS) {
    let { count, expenses } = action.payload;
    return {
      ...state,
      loading: false,
      error: null,
      expenses: expenses
    };
  }
  if (action.type === GET_EXPENSES_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }

  if (action.type === ADD_EXPENSE_STARTED) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === ADD_EXPENSE_SUCESS) {
    let { itemName, category, itemAmount, expenseDate } = action.payload;
    let arr = [
      {
        itemName: itemName,
        category: category,
        itemAmount: itemAmount,
        expenseDate: expenseDate
      }
    ];
    return {
      ...state,
      loading: false,
      error: null,
      expenses: [...state.expenses, ...arr]
    };
  }
  if (action.type === ADD_EXPENSE_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }

  if (action.type === GET_CATEGORIES_STARTED) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === GET_CATEGORIES_SUCESS) {
    let { count, categories } = action.payload;
    return {
      ...state,
      loading: false,
      error: null,
      categories: categories
    };
  }
  if (action.type === GET_CATEGORIES_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }

  if (action.type === ADD_CATEGORY_STARTED) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === ADD_CATEGORY_SUCCESS) {
    let { value, label } = action.payload;
    let arr = [];
    arr.push({ value: value, label: label });
    return {
      ...state,
      loading: false,
      error: null,
      categories: [...state.categories, ...arr]
    };
  }
  if (action.type === ADD_CATEGORY_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }

  if (action.type === GET_BUDGET_STARTED) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === GET_BUDGET_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      totalBudget: action.payload[0].totalBudget
    };
  }
  if (action.type === GET_BUDGET_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }
  if (action.type === CREATE_BUDGET_STARTED) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === CREATE_BUDGET_SUCCESS) {
    if (action.payload.key) {
      console.log("Exists", action.payload);
      return {
        ...state,
        loading: false,
        error: null
      };
    } else {
      return {
        ...state,
        loading: false,
        error: null,
        totalBudget: action.payload[0].totalBudget
      };
    }
  }
  if (action.type === CREATE_BUDGET_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }
  return state;
}

export default rootReducer;
