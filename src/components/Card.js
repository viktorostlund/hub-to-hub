import React from 'react';
import './Card.css';

function Card({user, deleteUser}) {
  return (
    <div className="Card">
      <p><b>{user.name}</b></p>
      {/* <p>{user.created_at}</p> */}
      <p>Followers: {user.Followers}</p>
      <p>Repos: {user.Repos}</p>
      <button type="submit" onClick={() => deleteUser(user.name)}>X</button>
    </div>
  );
}

export default Card;
