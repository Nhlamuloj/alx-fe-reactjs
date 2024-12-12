import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  // Update state when the input value changes
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (username.trim()) {
      onSearch(username.trim()); // Pass the username to the parent component or handler
      setUsername(""); // Optionally clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleChange}
        style={{ padding: "8px", flex: 1 }}
      />
      <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
        Search
      </button>
    </form>
  );
};

export default Search;
