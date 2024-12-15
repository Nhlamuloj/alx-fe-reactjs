import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError('Looks like we can’t find the user.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-component">
            <h1>GitHub User Search</h1>
            <div className="search-bar">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div className="user-info">
                    <img
                        src={userData.avatar_url}
                        alt={`${userData.login}'s avatar`}
                        className="user-avatar"
                        style={{ width: '150px', borderRadius: '50%' }}
                    />
                    <h2>{userData.name || userData.login}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
