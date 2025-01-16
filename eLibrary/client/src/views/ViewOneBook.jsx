import { useEffect, useState } from "react";

import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import Header from '../components/Header.jsx'

export const ViewOneBook = (req, res) => {
    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);
    const { isbn } = useParams();
    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn}`)
          .then(response => response.json())
          .then(data => setBook(data))
          .catch(error => console.error('Error fetching book:', error));
      }, []);

      
    return (
        <>
        <Header />
        <div>
           {book.title}
        </div>
        </>
    )
}

export default ViewOneBook;