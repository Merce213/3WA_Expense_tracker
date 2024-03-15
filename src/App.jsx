import AddExpense from "./components/AddExpense";
import DisplayExpense from "./components/DisplayExpense";

const App = () => {
	return (
		<main className="w-full min-h-[100dvh]">
			<h1 className="text-center text-3xl pt-10">Expense Tracker</h1>

			<div className="container flex mx-auto">
				<AddExpense />
				<DisplayExpense />
			</div>
		</main>
	);
};

export default App;
