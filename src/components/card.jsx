import React from "react";

export default function User({ user }) {
    const { avatar_url, followers, following, name, login, public_repos, created_at } = user;
    const createDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} alt="user" className="avatar" />
            </div>
            <div>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User joined on {`${createDate.getDate()} ${createDate.toLocaleString('en-us', {
                    month: 'short'
                })} ${createDate.getFullYear()}`}</p>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Public Repos: {public_repos}</p>
            </div>
        </div>
    );
}
