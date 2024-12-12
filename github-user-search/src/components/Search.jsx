import React, { useState } from "react";
import fetchUserData from '../services/githubService'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(searchTerm);
            setUserData(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can’t find the user.</p>}
            {userData && (
                <div style={{ marginTop: "20px" }}>
                    <img
                        src={userData.avatar_url}
                        alt={userData.login}
                        style={{ width: "150px", borderRadius: "50%" }}
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

export default Search