import React, { useState } from "react";
import User from "./card";
import './styles.css'

export default function GitHubProfileFinder() {
    const [username, setUsername] = useState('');
    const [userdata, setUserdata] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setUserdata(data);
        setLoading(false);
        setUsername('');  // Remove this line if you don't want to reset the username input
        console.log(data);
    }

    function handleSubmit() {
        if (username.trim()) {
            fetchGithubUserData();
        }
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search GitHub Username.."
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {loading ? (
                <h1>Loading data !! Please wait....</h1>
            ) : (
                userdata !== null ? <User user={userdata}/> : null
            )}
        </div>
    );
}
