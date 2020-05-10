import React from 'react';
import './Cards.css';
// import Card from './Card';

function Cards({users, deleteUser}) {
  return (
    <div className="Cards">
        {users.map(user =>
        <div>
          <p className="Card"><b>{user.name}</b></p>
          {/* <p>{user.created_at}</p> */}
          <p className="Card">Followers: {user.Followers}</p>
          <p className="Card">Repos: {user.Repos}</p>
          <p className="Card"><button type="submit" onClick={() => deleteUser(user.name)}>X</button></p>
        </div>
      )}
    </div>
  );
}

export default Cards;
