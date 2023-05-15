import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Book = () => {
	const [search, setSearch] = useState();
	const [url, setUrl] = useState("");
	const [show, setShow] = useState(false);
	const [item, setItem] = useState("");

	const apiKey = "AIzaSyDbXcfTxHeS1qa1g5wYeiRJtZUJ25gErcg";

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				const data = response.data;
				setItem(data.items);
				setShow(true);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [url]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUrl(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=40`);
	};

	return (
		<div>
			<form className="flex flex-row items-center justify-evenly py-8 w-[75%] md:w-[500px] mx-auto" onSubmit={handleSubmit}>
				<input
					type="search"
					placeholder="Enter Book to Search"
					className="w-[75%] md:w-[400px] text-lg rounded-md text-black pl-2 border-2 border-black"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit" onClick={handleSubmit}>
					<FaSearch className="" size={32} />
				</button>
			</form>
			<div className="w-[80%] mx-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">{show ? <BookItem data={item} /> : "Not Found"}</div>
		</div>
	);
};

export default Book;
