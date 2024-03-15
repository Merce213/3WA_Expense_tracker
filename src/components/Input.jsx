const Input = ({ type, placeholder, name, value, onChange }) => {
	return (
		<div className="mb-5">
			<label
				htmlFor={name}
				className="block mb-2 text-sm font-medium text-white"
			>
				{type === "text" ? "Nom de la dépense" : "Montant"}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				className="border p-2.5 w-full text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
				placeholder={placeholder}
				required
			/>
		</div>
	);
};

export default Input;
