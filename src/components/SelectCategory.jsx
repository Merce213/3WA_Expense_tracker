import { categoryData } from "../libs/categoryData";

const SelectCategory = ({ name, value, onChange }) => {
	return (
		<select
			className="border p-2.5 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
			name={name}
			value={value}
			onChange={onChange}
		>
			<option value={""}>--Choisir une catégorie--</option>
			{categoryData.map((category) => (
				<option key={category.id} value={category.name}>
					{category.name}
				</option>
			))}
		</select>
	);
};

export default SelectCategory;
