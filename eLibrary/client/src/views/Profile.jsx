import React, { useEffect, useState } from 'react';
import AddUser from './views/user_login';
import Reviews from './Reviews';
import './Profile.css'; // Import CSS

const ProfilePage = () => {
  const [books, setBooks] = useState([]);

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

export default ProfilePage;
