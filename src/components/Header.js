import React from "react";
import books from "../assets/books.png";

const Header = () => {
	return (
		<header className="flex flex-row justify-between items-center p-2 md:p-3">
			<img src={books} alt="BooksHub" className="w-10 md:w-12 lg:w-14 mr-2" />
			<span className="text-3xl md:text-4xl lg:text-5xl">BooksHub</span>
			<img src={books} alt="BooksHub" className="w-10 md:w-12 lg:w-14 ml-2" />
		</header>
	);
};

export default Header;
