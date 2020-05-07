import React, { useEffect } from 'react';
import Card from './Card';

function Cards({users, deleteUser}) {
  return (
    <div>
        {users.map(user => { 
          if (user.name) { 
            return <Card user={user} deleteUser={deleteUser}/>
          } 
        })}
    </div>
  );
}

export default Cards;
