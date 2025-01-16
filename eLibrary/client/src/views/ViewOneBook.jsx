import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import axios from 'axios';
import Header from '../components/Header.jsx'
import SearchBar from "../components/SearchBar.jsx";
import './ViewOneBook.css'
export const ViewOneBook = (props) => {
    const navigate = useNavigate();
    const {isbn} = useParams();
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const [bookIsbn, setBookIsbn] = useState(isbn);
    const [user, setUser] = useState();
const [reviewToDelete, setReviewToDelete] = useState();
    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/${isbn}`)
          .then(response => response.json())
          .then(data => setBooks(data.books))
          .catch(error => console.error('Error fetching books:', error));
      }, []);

    useEffect(() => {
        axios.get(`http://localhost:8000/reviews`)
        .then((res) => {
            setReviews(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [reviews]);

    const submitHandler = (e) => {
        e.preventDefault();
        const review = {
            title,
            description,
            rating,
            bookIsbn : isbn,
            user
        }
        axios.post(`http://localhost:8000/library`, review)
            .then((res) => {
                setTitle('');
                setDescription('');
                setRating(0);
                setUser('');
            })
            .catch((error) => {
                setError(error.response.data.errors);
                console.log(error);
            })
    }
    const deleteHandler =(e) => {
        e.preventDefault;
        axios.delete(`http://localhost:8000/reviews/${reviewToDelete._id}`)
            .catch((error)=>{
                setError(error.response.data.errors);
                console.log(error);
            })
    }
    return (
        <>
            <Header pageTitle='view one book'/>
            <div className="container">
                {
                books.map(book => (
                <div key={book.title} className="single-book">
                <h1>{book.title} <br /> {book.subtitle}</h1>
                <img src={book.image} alt={book.title} />
                </div>
                ))}
                <div className="reviews">
                    <h2>Reviews</h2>
                    {
                        reviews.map(review => (
                            review.bookIsbn == isbn ?
                        <div key={review.title} className="single-book">
                        <h3>{review.user}</h3>
                        <p>Title: {review.title}</p>
                        <p>Description: {review.description}</p>
                        <p>Rating: {review.rating}/5</p>
                        <form onSubmit={deleteHandler} ><input type="submit" onClick={(e)=> setReviewToDelete(review)} value="delete X" /></form>
                        </div>
                        :
                        <div></div>
                    ))}
                    
    <div>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Review this book</h2>
                    <div className="create_review">
                        <form onSubmit={submitHandler}>
                            <div>
                            <label>Review Title</label>
                            <input 
                            type="text" 
                            name="title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div>
                            <label>Description</label>
                            <input 
                            type="text" 
                            className="textbox" 
                            name="description"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <div>
                            <label>Rating</label>
                            <input type="number"
                            min={0}
                            max={5} 
                            name="rating"
                            value={rating} 
                            onChange={(e) => setRating(e.target.value)}/></div>
                            <div>
                            <label>User name</label>
                            <input 
                            type="text" 
                            name="user"
                            value={user} 
                            onChange={(e) => setUser(e.target.value)}/></div>
                            <button type="submit">Submit Review</button>
                        </form>
                    </div>
                </div>
            </div></div>
        </>
    )
}

export default ViewOneBook;