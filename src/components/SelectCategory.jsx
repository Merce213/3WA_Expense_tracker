import { categoryData } from "../libs/categoryData";

const SelectCategory = ({ name, value, onChange }) => {
	return (
		<select
			name={name}
			value={typeof value === "object" ? JSON.stringify(value) : value}
			onChange={onChange}
		>
			<option value={""}>--Choisir une catégorie--</option>
			{categoryData.map((category) => (
				<option
					key={category.id}
					value={JSON.stringify({
						id: category.id,
						name: category.name,
					})}
				>
					{category.name}
				</option>
			))}
		</select>
	);
};

export default SelectCategory;
