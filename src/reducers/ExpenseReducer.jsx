import { useReducer } from "react";

const initialState = {
	value: "",
};

const expenseReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const useExpenseReducer = () => useReducer(expenseReducer, initialState);
