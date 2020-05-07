import React, { useEffect } from 'react';
import Card from './Card';

function Cards({users, search, changeInput, input}) {
  return (
    <div>
        {input}
        <button onClick={() => changeInput('Hej')}></button>
        {users.map(user => { 
          return <Card user={user}/> 
        })}
    </div>
  );
}

export default Cards;
