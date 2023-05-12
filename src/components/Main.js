import React from "react";
import "../App.css";

const Main = () => {
	return (
		<main className="main-content flex flex-col justify-center items-center text-white">
			<h1 className="text-5xl md:text-6xl lg:text-7xl text-center mb-4">Find Your Book</h1>
			<p className="w-[80%] md:w-[600px] md:text-lg lg:text-xl">
				BooksHub is a place where you can find any type books and also you can know more about these books. BooksHub contains a whole lot of books.
				Name a book and you will get that. Just type the name of the book which you want to view and you will get that.
			</p>
		</main>
	);
};

export default Main;
