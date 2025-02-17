import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from "react-router-dom";
import Header from '../components/Header.jsx'
import { getOneUserByid,deleteUserByid } from "../services/services";

import './Profile.css'; 

const Profile = () => {
  const [books, setBooks] = useState([]);
  const [profileInfo, setProfileInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneUserByid(id)
      .then(res => setProfileInfo(res))
      .catch(error => {
        console.log('Profile.jsx', error);
      });
  }, [id]);


   const deleteReview= () => {
    deleteReviewByid(id)
      .then(() => {
        navigate("");
      })
      .catch(error => {
        console.log('Profile.jsx', error);
        setError("Failed to delete review.");
      });
  };

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then(response => response.json())
      .then(data => setBooks(data.books))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="profile-page">
      <header>
        <h1>My Profile</h1>
        <button className="logout-btn" onClick={() => navigate('/logout')}>Logout</button>
      </header>

      <div className="content">
        <div className="user-info">
          <img src="/path/to/profile-image.jpg" alt="Profile" />
          <h2>{profileInfo.name}</h2>
          <button>Edit Profile</button>
        </div>

        <div className="books-read">
          <h3>Books I've Read</h3>
          <div className="books-list">
            {books.map(book => (
              <div key={book.isbn13} className="book-item">
                <img src={book.image} alt={book.title} />
                <p>{book.title} <br /> {book.subtitle}</p>
                <button>View Book</button>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews">
          <h3>My Reviews</h3>
          <div className="review-item">
            <h4>Book 1 Title</h4>
            <p>Review Title by me on Date</p>
            <p>Review Text/Details</p>
           <button onClick={deleteReview}>Remove Review</button> <br />

      </div>
    </div>
    </div>
 </div>
  );
};

export default Profile;
