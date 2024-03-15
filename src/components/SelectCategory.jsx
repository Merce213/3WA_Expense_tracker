import { useState } from "react";
const SelectCategory = () => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<select name={"select"} value={value} onChange={handleChange}>
			<option value={"banane"}>Banane</option>
			<option value={"poire"}>Poire</option>
			<option value={"fraise"}>Fraises</option>
			<option value={"pommes"}>Pommes</option>
		</select>
	);
};

export default SelectCategory;
