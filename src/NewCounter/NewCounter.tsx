import { useState } from "react";
import NewButton from "./NewButton";

const NewCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};
	const minus = () => {
		setCount(count - 1);
	};

	return (
		<>
			<h1>New Counter</h1>
			<p>{count}</p>
			<NewButton title="Plus 1" clickFunction={plus} />
			<NewButton title="Minus 1" clickFunction={minus} />
		</>
	);
};

export default NewCounter;
