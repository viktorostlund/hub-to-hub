import React from 'react';
import './Cards.css';
import Card from './Card';

function Cards({users, deleteUser}) {
  return (
    <div className="Cards">
        {users.map(user => <Card user={user} deleteUser={deleteUser}/>)}
    </div>
  );
}

export default Cards;
