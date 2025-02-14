const Button = () => {
	const handleClick = () => {
		console.log("you clicked me!");
	};

	return <button onClick={handleClick}>Click Me!</button>;
};

export default Button;
