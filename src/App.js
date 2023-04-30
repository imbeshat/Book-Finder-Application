import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
import Main from "./components/Main";

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
