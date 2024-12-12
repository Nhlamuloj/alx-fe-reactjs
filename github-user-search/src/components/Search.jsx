import React, { useState } from "react";
import fetchUserData from '../services/githubService'


const Search = () => {
    const [query, setQuery] = useState('');
    const [userFound, setUserFound] = useState(true);

    const handleSearch = () => {
        // Example logic to determine if user is found
        const found = query === 'exampleUser'; // Replace with real search logic
        setUserFound(found);
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
            {!userFound && <p>Looks like we can't find the user</p>}
        </div>
    );
};

export default Search;
