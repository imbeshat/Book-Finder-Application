import "./App.css";
import Book from "./components/Book";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Book />
		</div>
	);
}

export default App;
