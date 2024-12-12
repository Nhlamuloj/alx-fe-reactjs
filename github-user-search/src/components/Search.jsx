import React, { useState } from "react";
import fetchUserData from '../services/githubService'


const Search = () => {
    const [query, setQuery] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setError(false);
        setUser(null);

        try {
            // Replace with your API endpoint
            const response = await fetch(`https://api.github.com/users/${query}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            setUser(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a user"
            />
            <button onClick={handleSearch}>Search</button>
            
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user</p>}
            
            {user && (
                <div>
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                    <p>Username: {user.login}</p>
                </div>
            )}
        </div>
    );
};

export default Search;
