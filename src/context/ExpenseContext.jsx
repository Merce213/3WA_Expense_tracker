import { createContext, useContext } from "react";
import { useExpenseReducer } from "../reducers/ExpenseReducer";

const ExpenseContext = createContext();

export const useExpenseContext = () => {
	const context = useContext(ExpenseContext);
	if (!context) {
		throw new Error("useExpense must be used within a ExpenseProvider");
	}
	return context;
};

export const ExpenseContextProvider = ({ children }) => {
	const store = useExpenseReducer();

	return (
		<ExpenseContext.Provider value={store}>
			{children}
		</ExpenseContext.Provider>
	);
};
