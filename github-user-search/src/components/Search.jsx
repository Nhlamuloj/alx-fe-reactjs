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
    </div>
  );
};

export default Search;
