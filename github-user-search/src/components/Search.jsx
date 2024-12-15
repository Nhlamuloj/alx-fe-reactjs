import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState(''); // State to handle input value

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (username.trim()) {
      onSearch(username); // Pass username to the parent or fetch function
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update state on input
          required
        />
        <button type="submit">Search</button>
      </form>


      <div className="user-info">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.login}</h2>
        </div>
    </div>

    
  );
};

export default Search;
