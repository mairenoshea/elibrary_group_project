
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import Header from '../components/Header.jsx'
import SearchBar from "../components/SearchBar.jsx";
import './Home.css'
export const Home = (props) => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const {data, onSearch} = props;

    useEffect(() => {
        fetch('https://api.itbook.store/1.0/new')
          .then(response => response.json())
          .then(data => setBooks(data.books))
          .catch(error => console.error('Error fetching books:', error));
      }, []);

    return (
        <>
            <Header  pageTitle="eLibrary"/>
            <SearchBar onSearch={onSearch} />
            <div className="container">
                <div className="books-cont">
                    <h1>New Releases</h1>
                    <div className="books">
                        {
                        books.slice(0,10).map(book => (
                        <div key={book.title} className="single-book">
                        <img src={book.image} alt={book.title} className="book_cover"/>
                        <p>{book.title} <br />{book.subtitle}</p>
                        <Link to={`/books/${book.isbn13}`}>
                            <button>View Book</button>
                        </Link>
                        </div>
                        ))}
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Home;