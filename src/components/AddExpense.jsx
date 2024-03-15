import { useExpenseContext } from "../context/ExpenseContext";
import SelectCategory from "./SelectCategory";

const AddExpense = () => {
	const [state, dispatch] = useExpenseContext();

	console.log(state);

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({
			type: "SET_VALUE",
			payload: {
				name,
				value,
			},
		});

		if (name === "category") {
			dispatch({
				type: "SET_VALUE",
				payload: {
					name: "category",
					value: JSON.parse(value),
				},
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ((state.name && state.amount && state.category) !== "") {
			dispatch({
				type: "ADD_EXPENSE",
			});
		}

		dispatch({
			type: "SET_ERROR",
			payload:
				"Tous les champs sont obligatoires et doivent être remplis.",
		});

		// Ici, vous pouvez ajouter la logique pour ajouter la dépense à votre base de données ou à votre état global
		console.log(`Ajouter la dépense: ${JSON.stringify(state)}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Ajouter une dépense</h2>

			{state.error && <p className="text-red-500">{state.error}</p>}

			<label>
				Catégorie:
				<SelectCategory
					name={"category"}
					value={state.category}
					onChange={handleChange}
				/>
			</label>
			<label>
				Nom:
				<input
					type="text"
					value={state.name}
					onChange={handleChange}
					name="name"
				/>
			</label>
			<label>
				Montant:
				<input
					type="number"
					value={state.amount}
					onChange={handleChange}
					name="amount"
				/>
			</label>
			<input type="submit" value="Ajouter la dépense" />
		</form>
	);
};

export default AddExpense;
