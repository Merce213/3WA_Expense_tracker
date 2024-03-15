import { useExpenseContext } from "../context/ExpenseContext";
import SelectCategory from "./SelectCategory";

const DisplayExpense = () => {
	const [state, dispatch] = useExpenseContext();

	const { expenses, selectedCategory } = state;

	const filteredExpenses = selectedCategory
		? expenses.filter((expense) => expense.category === selectedCategory)
		: expenses;

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({
			type: "SET_VALUE",
			payload: {
				name,
				value,
			},
		});
	};

	console.log(expenses);

	return (
		<div className="w-1/2">
			<div className="pt-20">
				<h2 className="text-lg">Dépenses effectués</h2>
			</div>

			<div>
				<label>Catégorie:</label>

				<SelectCategory
					name={"selectedCategory"}
					value={selectedCategory}
					onChange={handleChange}
				/>
			</div>

			{filteredExpenses.length > 0 && (
				<ul>
					{filteredExpenses.map((expense) => (
						<li key={expense.id}>
							{expense.name} - {expense.amount}€
						</li>
					))}
				</ul>
			)}

			{filteredExpenses.length > 0 && (
				<div>
					<p>
						Total:{" "}
						{filteredExpenses.reduce(
							(acc, expense) => acc + parseInt(expense.amount),
							0
						)}
						€
					</p>
				</div>
			)}

			{filteredExpenses.length === 0 && <p>Aucune dépense à afficher.</p>}
		</div>
	);
};

export default DisplayExpense;
/* 
{
	expenses.length > 0 && (
		<p>
			Total:{" "}
			{filteredExpenses.reduce(
				(acc, expense) => acc + parseInt(expense.amount),
				0
			)}
		</p>
	);
}

{
	expenses.length > 0 && (
		<p>
			Moyenne:{" "}
			{(
				filteredExpenses.reduce(
					(acc, expense) => acc + parseInt(expense.amount),
					0
				) / filteredExpenses.length
			).toFixed(2)}
		</p>
	);
}

{
	expenses.length > 0 && (
		<p>
			Plus grande dépense:{" "}
			{
				filteredExpenses.reduce(
					(acc, expense) => {
						if (parseInt(expense.amount) > acc.amount) {
							acc = expense;
						}
						return acc;
					},
					{ amount: 0 }
				).name
			}
		</p>
	);
}

{
	expenses.length > 0 && (
		<p>
			Plus petite dépense:{" "}
			{
				filteredExpenses.reduce(
					(acc, expense) => {
						if (parseInt(expense.amount) < acc.amount) {
							acc = expense;
						}
						return acc;
					},
					{ amount: Infinity }
				).name
			}
		</p>
	);
}

{
	expenses.length > 0 && (
		<p>
			Catégories:{" "}
			{expenses
				.map((expense) => expense.category)
				.filter((value, index, self) => self.indexOf(value) === index)
				.join(", ")}
		</p>
	);
}

{
	expenses.length > 0 && (
		<p>
			Total par catégorie:{" "}
			{expenses
				.map((expense) => expense.category)
				.filter((value, index, self) => self.indexOf(value) === index)
				.map((category) => {
					const total = expenses
						.filter((expense) => expense.category === category)
						.reduce(
							(acc, expense) => acc + parseInt(expense.amount),
							0
						);
					return `${category}: ${total}`;
				})
				.join(", ")}
		</p>
	);
}
 */
