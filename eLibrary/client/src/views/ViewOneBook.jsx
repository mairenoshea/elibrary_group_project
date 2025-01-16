import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";

export const ViewOneBook = (props) => {
    const {book_id} = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${book_id}`)
          .then(response => response.json())
          .then(data => setBooks(data.books))
          .catch(error => console.error('Error fetching books:', error));
      }, []);
    
      console.log(books)
    return (
        <div>
            <h1>{book_id}</h1>
        </div>
    )
}

export default ViewOneBook;