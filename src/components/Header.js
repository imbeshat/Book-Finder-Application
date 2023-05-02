import React from "react";
import books from "../assets/books.png";

const Header = () => {
	return (
		<header className="flex flex-row justify-start items-center p-2 md:p-3 fixed text-white">
			<img src={books} alt="BooksHub" className="w-10 md:w-12 lg:w-14 mr-2" />
			<span className="text-2xl md:text-3xl lg:text-4xl">BooksHub</span>
		</header>
	);
};

export default Header;
