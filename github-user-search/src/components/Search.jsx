import React, { useState } from 'react';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Looks like we can’t find the user');
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchUser();
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p>{error}</p>}

      {/* User Data */}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.login}</h2>
        </div>
      )}
    </div>
  );
};

export default Search;
