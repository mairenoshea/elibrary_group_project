import React, { useEffect, useState } from 'react';
import './Profile.css'; 

const Profile = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new')
      .then(response => response.json())
      .then(data => setBooks(data.books))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const UserInfo = () => (
    <div className="user-info">
      <img src="/path/to/profile-image.jpg" alt="Profile" />
      <h2>John Doe</h2>
      <button>Edit Profile</button>
    </div>
  );

  const BooksRead = ({ books }) => (
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
  );

  const Reviews = () => (
    <div className="reviews">
      <h3>My Reviews</h3>
      <div className="review-item">
        <h4>Book 1 Title</h4>
        <p>Review Title by me on Date</p>
        <p>Review Text/Details</p>
      </div>
      <div className="review-item">
        <h4>Book 2 Title</h4>
        <p>Review Title by me on Date</p>
        <p>Review Text/Details</p>
      </div>
    </div>
  );

  return (
    <div className="profile-page">
      <header>
        <h1>My Profile</h1>
        <button className="logout-btn">Logout</button>
      </header>
      <div className="content">
        <UserInfo />
        <BooksRead books={books} />
        <Reviews />
      </div>
    </div>
  );
};

export default Profile;

