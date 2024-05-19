import React from "react";
import Navbar from "./Navbar";
import { getAllBooks, delBook } from "../actions/bookAction";
import "./Book.css";

const Book = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBooks();
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          console.error("Data fetched is not an array:", response.data);
          alert("Data fetched is not an array");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteBook = async (title) => {
    try {
      const response = await delBook(title);
      
      if (response.success) {
        // Update daftar buku setelah penghapusan berhasil
        const updatedBooks = books.filter((book) => book.title !== title);
        setBooks(updatedBooks);
        alert("Buku berhasil dihapus dari reading list");
      } else {
        alert("Gagal menghapus buku dari reading list");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Terjadi kesalahan saat menghapus buku");
    }
  };

  return (
    <div>
      <Navbar />
      <BookGrid books={books} handleDeleteBook={handleDeleteBook} />
    </div>
  );
};

const BookGrid = ({ books, handleDeleteBook }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {books.map((book) => (
        <div key={book.id} className="m-4">
          <div className="book-card p-4 bg-[#622A0F] shadow-lg rounded-lg w-80 text-center">
            <h2 className="text-white text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-white text-lg font-italic mb-2">-{book.author}-</p>
            <p className="text-white text-lg mb-2 book-synopsis">
              {book.synopsis.length > 200
                ? `${book.synopsis.substring(0, 200)}...`
                : book.synopsis}
            </p>
            <div className="mt-4">
              <button
                onClick={() => handleDeleteBook(book.title)}
                className="text"
              >
                Delete from Reading List
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
