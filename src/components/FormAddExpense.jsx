import { useExpenseContext } from "../context/ExpenseContext";
import Input from "./Input";
import SelectCategory from "./SelectCategory";

const FormAddExpense = () => {
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
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!state.name.trim() || !state.amount || !state.category) {
			dispatch({
				type: "SET_ERROR",
				payload:
					"Tous les champs sont obligatoires et doivent être remplis.",
			});
			return;
		}

		if (state.amount < 0 || isNaN(state.amount)) {
			dispatch({
				type: "SET_ERROR",
				payload: "Le montant doit être un nombre positif.",
			});
			return;
		}

		dispatch({
			type: "ADD_EXPENSE",
		});
	};

	return (
		<div className="w-1/2">
			<div className="pt-20">
				<h2 className="text-lg">Ajouter une dépense</h2>
				{state.error && (
					<p className="text-red-500 text-sm">{state.error}</p>
				)}
			</div>

			<form onSubmit={handleSubmit} className="max-w-sm">
				<div className="mb-5 pt-5">
					<label className="block mb-2 text-sm font-medium text-white">
						Catégorie:
					</label>
					<SelectCategory
						name={"category"}
						value={state.category}
						onChange={handleChange}
					/>
				</div>

				<Input
					type="text"
					value={state.name}
					onChange={handleChange}
					name="name"
					placeholder="Insérer le nom de la dépense"
				/>
				<Input
					type="number"
					value={state.amount}
					onChange={handleChange}
					name="amount"
					placeholder="Insérer le montant"
				/>

				<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-blue-900 transition-all duration-300">
						Ajouter
					</span>
				</button>
			</form>
		</div>
	);
};

export default FormAddExpense;
/* 
<form onSubmit={handleSubmit} className="flex flex-col gap-5">
	<label className="">
		Catégorie:
		<SelectCategory
			name={"category"}
			value={state.category}
			onChange={handleChange}
		/>
	</label>
	<label className="">
		Nom:
		<input
			type="text"
			value={state.name}
			onChange={handleChange}
			name="name"
		/>
	</label>
	<label className="">
		Montant:
		<input
			type="number"
			value={state.amount}
			onChange={handleChange}
			name="amount"
		/>
	</label>
	<button type="submit" className="bg-blue-500 text-white py-3 rounded-lg">
		Ajouter
	</button>
</form>
 */
