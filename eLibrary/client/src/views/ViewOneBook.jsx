import { useEffect, useState } from "react";

import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import Header from '../components/Header.jsx'

export const ViewOneBook = (req, res) => {
    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({});
    const { isbn } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn}`)
          .then(response => response.json())
          .then(data => setBook(data))
          .catch(error => console.error('Error fetching book:', error));
      }, []);
    
    const handleSubmit = (e) => {
        e.preventdefault();
        addReview(formData)
            .then(res =>  navigate(`/Home`))
            .catch((error) =>  setErrors(error))
    }

    const updateFormData = (e) => {
        const {name, value} = e.target; 
        setFormData({...formData, [name]:value});
    }

      
    return (
        <>
        <Header pageTitle={book.title} />
        <div>
            <img src={book.image} />
            <h4>{book.subtitle}</h4>
        </div>

        <h3>review this book</h3>
        <form onSubmit={handleSubmit}>
            <label>My name:</label>
            <input type="text" name="name" value={formData.name} onChange={updateFormData}/>
            <label>Rating (/5):</label>
            <input type="number" name="rating" value={formData.rating} onChange={updateFormData} />
            <input type="hidden" name="isbn-13" value={isbn} />
        
            <label>My thoughts:</label>
            <textarea name="text" value={formData.text} onChange={updateFormData}></textarea>
            <button>Submit</button>
        </form>
        </>
        )
}

export default ViewOneBook;