import { useReducer } from "react";

const initialState = {
	name: "",
	amount: "",
	category: {},
	expenses: [],
	error: "",
};

const expenseReducer = (state, action) => {
	switch (action.type) {
		case "SET_VALUE":
			return {
				...state,
				[action.payload.name]: action.payload.value,
				error: "",
			};

		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const useExpenseReducer = () => useReducer(expenseReducer, initialState);
