import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBooks } from '../actions/bookAction';

const AddBook = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newSynopsis, setNewSynopsis] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookData = {
        title: newTitle,
        author: newAuthor,
        synopsis: newSynopsis
      };
      
      const response = await addBooks(bookData);

      if (response.success) {
        console.log('Successfully add book:', response.data);
        alert('Book added successfully');
        navigate('/book');
      } else {
        setError('Failed to add book');
        alert('Failed to add book');
      }
    } catch (error) {
      console.error('Server error:', error);
      setError('Server error');
      alert('Server error');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Add Book</h2>
        <div className="input-group">
          <label htmlFor="newTitle">Title</label>
          <input
            type="text"
            id="newTitle"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="newAuthor">Author</label>
          <input
            type="text"
            id="newAuthor"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="newSynopsis">Synopsis</label>
          <input
            type="text"
            id="newSynopsis"
            value={newSynopsis}
            onChange={(e) => setNewSynopsis(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-button">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
