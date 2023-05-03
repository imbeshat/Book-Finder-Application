import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import { FaSearch } from "react-icons/fa";

const Book = () => {
	const [search, setSearch] = useState();
	const [url, setUrl] = useState("");
	const [show, setShow] = useState(false);
	const [item, setItem] = useState("");

	const apiKey = "AIzaSyDbXcfTxHeS1qa1g5wYeiRJtZUJ25gErcg";

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setItem(data.meals);
				setShow(true);
			});
	}, [url]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUrl(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`);
	};

	return (
		<div className="bg-[#34123e]">
			<form className="flex flex-row items-center justify-evenly py-4 w-[75%] md:w-[500px] mx-auto" onSubmit={handleSubmit}>
				<input
					type="search"
					placeholder="Enter Book to Search"
					className="w-[75%] md:w-[400px] text-lg rounded-md text-black pl-2"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit" className="" onClick={handleSubmit}>
					<FaSearch className="" size={32} />
				</button>
			</form>
			<div className="w-[80%] mx-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">{show ? <BookItem data={item} /> : "Not Found"}</div>
		</div>
	);
};

export default Book;
