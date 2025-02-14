import "./App.css";
import Button from "./Button/Button";
import Counter from "./Counter/Counter";
import NewCounter from "./NewCounter/NewCounter";

function App() {
	return (
		<>
			<h1>🪴 potted-plant 🪴</h1>
			<p>Nu gör vi interaktiva komponenter!</p>
			<Counter />
			<Counter />
			<Button />
			<NewCounter />
		</>
	);
}

export default App;
