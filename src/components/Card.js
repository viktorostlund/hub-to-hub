import React from 'react';
import './Card.css';

function Card({user, deleteUser}) {
  return (
    <div className="Card">
      <p>Username: {user.name}</p>
      <p>Followers: {user.Followers}</p>
      <p>Created: {user.created_at}</p>
      <p>Public repos: {user.Repos}</p>
      <button type="submit" onClick={() => deleteUser(user.name)}>X</button>
    </div>
  );
}

export default Card;
