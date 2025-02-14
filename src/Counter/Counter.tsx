import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="Counter">
			<h2>Counter</h2>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Plus 1
			</button>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				Minus 1
			</button>
		</div>
	);
};

export default Counter;
