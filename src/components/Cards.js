import React from 'react';
import './Cards.css';
import Card from './Card';

function Cards({users, deleteUser}) {
  return (
    <div className="Cards">
        {users.map(user => { 
          if (user.name) { 
            return <Card user={user} deleteUser={deleteUser}/>
          }
          return '';
        })}
    </div>
  );
}

export default Cards;
